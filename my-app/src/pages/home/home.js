import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Grid,
  Flex,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';

import ArticleRecSection from './ArticleRecSection';
import Sidebar from './sidebar/sidebar';
import categoryTypes from './categoryTypes';
import { useEffect, useState } from 'react';

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = id => {
    setActiveTab(id);
  };
  // useEffect(() => {
  //   setActiveTab(0);
  // }, []);
  useEffect(() => {
    console.log(activeTab.activeTab);
  }, [activeTab]);
  useEffect(() => {}, [activeTab]);
  return (
    <Box>
      <Grid paddingX={'20px'}>
        <Center>
          <Image src={'logo.png'} height={'60%'}></Image>
        </Center>
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
