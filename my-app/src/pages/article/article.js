import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  ModalContent,
} from '@chakra-ui/react';
import Banner from './banner';
import Content from './content';

function Article() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Banner></Banner>
      <Content></Content>
      <VStack spacing={8}></VStack>
    </Box>
  );
}

export default Article;
