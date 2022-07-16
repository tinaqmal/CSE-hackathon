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
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Banner from './banner';
import Content from './content';

function Article() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Banner></Banner>
        <Content></Content>
        <VStack spacing={8}></VStack>
      </Grid>
    </Box>
  );
}

export default Article;
