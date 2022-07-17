import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Grid,
  Flex,
  Center,
  Button,
  Heading,
} from '@chakra-ui/react';

import ArticleRecSection from './ArticleRecSection';
import Sidebar from './sidebar/sidebar';
import categoryTypes from './categoryTypes';
import { useState } from 'react';

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = id => {
    setActiveTab(id);
  };

  return (
    <Box>
      <Grid paddingX={'20px'}>
        <Center>
          <Image src={'logo.png'} height={'60%'}></Image>
        </Center>
        <Center>
          <Heading as="h2" fontWeight={'500'}>
            Good Afternoon, Tina!{' '}
          </Heading>
        </Center>
        <Center>
          <Heading fontWeight="300" as="i" fontSize="xl">
            What are you grateful about today?
          </Heading>
        </Center>

        <Center></Center>
        <Flex mb={4} flexDirection="row-reverse">
          <a href="/">
            <Button colorScheme={'orange'}>Sign Up</Button>
          </a>
          <a href="/">
            <Button colorScheme={'orange'} mr={3}>
              Log In
            </Button>
          </a>
        </Flex>
        <Flex>
          <Sidebar active={activeTab} tabClick={tabClick}></Sidebar>
          <ArticleRecSection
            category={categoryTypes[activeTab]}
          ></ArticleRecSection>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Home;
