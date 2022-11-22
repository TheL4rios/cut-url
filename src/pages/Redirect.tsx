import { Spinner, useToast } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import urlService from '../core/api/url.service';
import { IError } from '../core/interfaces/error.interface';
import { getErrorMessage } from '../core/helpers/getErrorMessage';

export const Redirect = () => {

    const toast = useToast();
    const { code } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUrl();
    }, []);

    const fetchUrl = async () => {
        if (code) {
            try {
                const res = await urlService.getByCode(code);
                window.location.href = res.data;
            } catch (error) {
                toast({
                    title: getErrorMessage(error as IError),
                    status: 'error',
                    isClosable: true,
                });
                navigate('/');
            }

            return;
        }

        navigate('/');
    }

    return (
        <Spinner size='xl' />
    )
}
