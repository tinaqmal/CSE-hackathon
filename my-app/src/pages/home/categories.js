import React from 'react';
import {
  VStack,
  Button,
  Container,
  Text,
  Heading,
  Checkbox,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import categoryTypes from './categoryTypes';

function Categories() {
  return (
    <Box>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Container maxW="850px" marginBlockStart={20}>
        <VStack spacing={10}>
          <Heading as="h1" fontSize="30px">
            Choose the type of content you want Nectar to focus on
          </Heading>

          <Text fontSize="20px">
            Don't worry, you can always change it later!
          </Text>

          <SimpleGrid columns={2} spacing={5}>
            {categoryTypes.map(cat => (
              <Checkbox size="lg" colorScheme="green">
                {cat}
              </Checkbox>
            ))}
          </SimpleGrid>

          <Container centerContent>
            <a href="/home">
              <Button colorScheme="orange" width="200px">
                Save
              </Button>
            </a>
          </Container>
        </VStack>
      </Container>
    </Box>
  );
}

export default Categories;
