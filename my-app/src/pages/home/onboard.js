import React from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Container,
  Text,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function Onboard() {
  return (
    <Box>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Container maxW="500px" marginBlockStart={20}>
        <VStack spacing={3}>
          <Box marginLeft={10} marginBlockEnd={5}>
            <Image src="logo.png" />
          </Box>

          <Input variant="outline" placeholder="email" />
          <Input variant="outline" placeholder="password" />
          <Text as="u">Forgot Password </Text>

          <a href="/home">
            <Button colorScheme="orange" width="300px">
              Login
            </Button>
          </a>
          <Text>OR</Text>
          <a href="/signup">
            <Button colorScheme="orange" width="300px" variant="outline">
              Sign Up
            </Button>
          </a>
          <a href="/categories">
            <Button colorScheme="orange" width="300px" variant="outline">
              Continue As Guest
            </Button>
          </a>
        </VStack>
      </Container>
    </Box>
  );
}

export default Onboard;
