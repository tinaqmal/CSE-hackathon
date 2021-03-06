import React from 'react';
import {
  VStack,
  Input,
  Button,
  Container,
  Checkbox,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function Signup() {
  return (
    <Box>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Container maxW="500px" marginBlockStart={20}>
        <VStack spacing={3}>
          <Heading as="h1" fontSize="30px">
            Register
          </Heading>
          <Input variant="outline" placeholder="First name" />
          <Input variant="outline" placeholder="Last name" />
          <Input variant="outline" placeholder="Email" />

          <Input variant="outline" placeholder="Create password" />
          <Input variant="outline" placeholder="Confirm password" />

          <Text as="u">Terms & Conditions </Text>

          <Checkbox size="md" colorScheme="gray">
            I agree to the terms & conditions
          </Checkbox>

          <a href="/categories">
            <Button colorScheme="orange">Sign Up</Button>
          </a>
        </VStack>
      </Container>
    </Box>
  );
}

export default Signup;
