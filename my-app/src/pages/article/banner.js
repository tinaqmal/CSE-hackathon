import React from 'react';
import { Container } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import bannerImage from './main_image_star-forming_region_carina_nircam_final-5mb.jpeg';

function Banner() {
  return (
    <Container
      background={`url("${bannerImage}")`}
      backgroundSize={'cover'}
      w="100vw"
      h="650px"
      textAlign={'left'}
      position={'relative'}
    >
      <Box paddingLeft={'40px'} position={'absolute'} bottom="70">
        <Text
          fontSize="50px"
          color="white"
          font="inter"
          fontWeight="600"
          filter="drop-shadow(0 0.3mm 0.3mm rgb(128,128,128))"
        >
          Here are the James Webb <br></br> Space Telescope’s stunning <br></br>{' '}
          first pictures
        </Text>
        <Text
          marginTop={'13px'}
          fontSize="15px"
          color="white"
          font="inter"
          fontWeight="600"
          filter="drop-shadow(0 0.3mm 0.3mm rgb(128,128,128))"
        >
          Credits: NASA, ESA, CSA, and STScI
        </Text>
      </Box>
    </Container>
  );
}

export default Banner;
