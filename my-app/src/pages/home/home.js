import React from 'react';
import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  VStack,
  Grid,
  Flex,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

import ArticleRecSection from './ArticleRecSection';
import logo from '../../assets/logo.png';
function Home() {
  return (
    <Box>
      <Grid paddingX={'20px'}>
        <Center>
          <Image src={logo} height={'60%'}></Image>
        </Center>

        <ArticleRecSection></ArticleRecSection>
      </Grid>
    </Box>
  );
}

export default Home;
