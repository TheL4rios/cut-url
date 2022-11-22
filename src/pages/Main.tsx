import { Center, Container, Heading, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import urlService from '../core/api/url.service';
import { IError } from '../core/interfaces/error.interface';
import { ManageUrl } from './ManageUrl';

const regexUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const Main = () => {

  const toast = useToast();

  const [url, setUrl] = useState<string | undefined>(undefined);
  const [code, setCode] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const onCutUrl = async () => {
    if (!url) {
      toast({
        title: `URL required`,
        status: 'warning',
        isClosable: true,
      });
      return;
    }

    if (!regexUrl.test(url)) {
      toast({
        title: `Invalid URL`,
        status: 'error',
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await urlService.create(url);
      toast({
        title: `URL shorted`,
        status: 'success',
        isClosable: true,
      });
      setCode(res.data);
      setUrl('');
    } catch (error) {
      toast({
        title: (error as IError).response.data.message,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Heading marginBottom={2} textAlign='center'>URL to short</Heading>
      <Input value={url} onChange={e => setUrl(e.target.value)} placeholder='https://url.com' />
      <Center>
        <Button isLoading={isLoading} colorScheme='teal' variant='solid' marginTop={3} onClick={onCutUrl}>
          Shorten
        </Button>
      </Center>

      {
        code && <ManageUrl code={code}/>
      }
    </Container>
  )
}
