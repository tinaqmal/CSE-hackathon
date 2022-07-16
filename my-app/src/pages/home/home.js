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

function Home() {
  return (
    <Box>
      <Grid paddingX={'20px'}>
        <Center>
          <Image src={'logo.png'} height={'60%'}></Image>
        </Center>
        <Flex>
          <Sidebar></Sidebar>
          <ArticleRecSection></ArticleRecSection>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Home;
