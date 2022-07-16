import React from 'react';
import { useState } from 'react';
import {
  ChakraProvider,
  VStack,
  theme,
  Input,
  Button,
  Container,
  Text,
  Heading,
  Checkbox,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function Categories() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Container maxW="850px" marginBlockStart={20}>
        <VStack spacing={3}>
          <Heading as="h1" fontSize="30px">
            Choose the type of content you want Nectar to focus on
          </Heading>

          <Text fontSize="20px">
            Don't worry, you can always change it later!
          </Text>

          <SimpleGrid columns={2} spacing={5}>
            <Checkbox size="lg" colorScheme="green">
              Science
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Environment
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Animals
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Education
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Transport
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Animals
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              People
            </Checkbox>
            <Checkbox size="lg" colorScheme="green">
              Discoveries
            </Checkbox>
          </SimpleGrid>

          <a href="/home">
            <Button colorScheme="orange">Save</Button>
          </a>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default Categories;
