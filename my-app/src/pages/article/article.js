import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import Banner from './banner';
import Content from './content';

function Article() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <Banner></Banner>
        <Content></Content>
        <VStack spacing={8}></VStack>
      </Grid>

      <Button
        onClick={onOpen}
        position={'fixed'}
        bottom={70}
        right={10}
        colorScheme="orange"
        size="lg"
        variant="outline"
      >
        Share
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share this article with your friends!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="u">
              {' '}
              https://www.nectar.io/HjK1oIsniL920SKUi109USNjhu{' '}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={onClose}
              marginRight={160}
            >
              Copy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Article;
