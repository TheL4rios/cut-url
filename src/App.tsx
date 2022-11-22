import { ChakraProvider, Center } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Center bg='darkslategrey' h='100vh' color='white'>
        <Outlet />
      </Center>
    </ChakraProvider>
  );
}

export default App;
