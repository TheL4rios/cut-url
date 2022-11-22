import { Button, Card, CardBody, useToast, Center, Input } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import QRCode from "qrcode.react";
import { downloadQr } from '../core/helpers/downloadQr';

const URL_WEB = process.env.REACT_APP_URL_WEB;

export const ManageUrl = ({ code }: { code: string }) => {

  const toast = useToast();

  const [isCopying, setIsCopying] = useState(false);
  const [generateQr, setGenerateQr] = useState(false);
  const [url, setUrl] = useState(`${URL_WEB}/${code}`);

  useEffect(() => {
    setGenerateQr(false);
    setUrl(`${URL_WEB}/${code}`);
  }, [code]);

  const onCopy = async () => {
    setIsCopying(true);
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: 'URL copy to clipboard',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Something went wrong to copy url',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsCopying(false);
    }
  }

  return (
    <Card align='center' bg='white' marginTop={4}>
      <CardBody w='100%'>
        <Input w='100%' value={url} readOnly />
        <Center>
          {
            generateQr && <QRCode
              id="qr-gen"
              value={url}
              size={290}
              level={"H"}
              includeMargin={true}
            />
          }
        </Center>
        <Center>
          <Button isLoading={isCopying} colorScheme='teal' variant='solid' marginTop={3} onClick={onCopy}>
            Copy
          </Button>
          <Button colorScheme='teal' variant='solid' marginTop={3} marginLeft={4} onClick={() => { generateQr ? downloadQr('qr-gen', 'qr') : setGenerateQr(true) }}>
            {generateQr ? 'Download QR' : 'Generate QR'}
          </Button>
        </Center>
      </CardBody>
    </Card>
  )
}
