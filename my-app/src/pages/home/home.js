import React from 'react';
import { Box, Image, Text, VStack, Grid, Flex, Center } from '@chakra-ui/react';

import ArticleRecSection from './ArticleRecSection';

function Home() {
  return (
    <Box>
      <Grid paddingX={'20px'}>
        <Center>
          <Image src={'logo.png'} height={'60%'}></Image>
        </Center>

        <ArticleRecSection></ArticleRecSection>
      </Grid>
    </Box>
  );
}

export default Home;
