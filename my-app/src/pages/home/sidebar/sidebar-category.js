import { chakra, Link, Flex, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
const SidebarCategory = ({ title, isActive, onClick, id }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      id={id}
      onClick={() => onClick(id)}
    >
      <Flex
        align="center"
        justifyContent={'space-between'}
        p="4"
        mb="4"
        fontSize="15px"
        fontWeight="500"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? '#Efaa1f' : 'white'}
        _hover={{
          bg: '#Efaa1f',
          color: 'white',
        }}
      >
        <Text>{title}</Text>
        {(id === 1 || id === 2 || id === 3) && (
          <CheckIcon color="green.500"></CheckIcon>
        )}
      </Flex>
    </Link>
  );
};

export default SidebarCategory;
