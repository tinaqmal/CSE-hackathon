import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ArticleCard = ({ size, img, title, source }) => {
  let h;

  if (size === 'lg') {
    h = '550px';
  }
  return (
    <Box
      h={h}
      borderRadius="sm"
      background={`url("${img}")`}
      backgroundSize={'cover'}
      position={'relative'}
      pl={4}
      pb={4}
      boxShadow={'25px -99px 400px -75px rgba(0,0,0,0.74) inset'}
    >
      <Box bottom="16px" position={'absolute'} width="100%">
        <Text fontWeight="600" fontSize={'20px'} color="white">
          {title}
        </Text>
        <Text fontSize={'14px'} color="white">
          {source}
        </Text>
      </Box>
    </Box>
  );
};

export default ArticleCard;
