import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const ReactButton = () => {
  const [liked, setLiked] = useState(false);
  const onLike = () => {
    setLiked(!liked);
  };
  return (
    <Button
      bg={liked ? '#efaa1f' : '#E2E8F0'}
      position={'absolute'}
      right={'16px'}
      top="16px"
      onClick={onLike}
    >
      {' '}
      😄{' '}
    </Button>
  );
};
const ArticleCard = ({ size, img, title, source }) => {
  let h;

  if (size === 'lg') {
    h = '650px';
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
      pr={4}
      boxShadow={'25px -99px 400px -75px rgba(0,0,0,0.74) inset'}
    >
      <Box bottom="16px" position={'absolute'} width="95%">
        <Text fontWeight="600" fontSize={'20px'} color="white">
          {title}
        </Text>
        <Text fontSize={'14px'} color="white">
          {source}
        </Text>
      </Box>
      <ReactButton></ReactButton>
    </Box>
  );
};

export default ArticleCard;
