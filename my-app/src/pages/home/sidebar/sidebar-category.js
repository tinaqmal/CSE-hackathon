import { chakra, Link, Flex, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

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
        p="4"
        mb="4"
        fontSize="16px"
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
      </Flex>
    </Link>
  );
};

export default SidebarCategory;
