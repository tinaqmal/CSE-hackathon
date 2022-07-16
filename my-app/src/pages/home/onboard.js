import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Input,
  Button,
  Container,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function Onboard() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Container maxW="500px" marginBlockStart={20}>
        <VStack spacing={3}>
          <Box marginLeft={10} marginBlockEnd={5}>
            <Image src="logo.png" />
          </Box>

          <Input variant="outline" placeholder="email" />
          <Input variant="outline" placeholder="password" />
          <a href="/home">
            <Button colorScheme="orange">Login</Button>
          </a>
          <a href="/signup">
            <Button colorScheme="orange">Sign Up</Button>
          </a>
          <a href="/categories">
            <Button colorScheme="orange">Continue As Guest</Button>
          </a>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default Onboard;
