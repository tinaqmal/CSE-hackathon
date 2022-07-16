import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import categoryTypes from '../categoryTypes';
import SidebarCategory from './sidebar-category';

const Sidebar = () => {
  const [active, setActive] = useState({
    active: 0,
  });
  const tabClick = id => {
    setActive(id);
  };
  useEffect(() => {
    setActive(0);
  }, []);
  return (
    <Box width="10%" mr="8">
      {/* <Text fontWeight={'600'}>Categories</Text> */}
      <SidebarCategory
        id={0}
        title={'🤩 For you'}
        isActive={active === 0}
        onClick={tabClick}
      ></SidebarCategory>

      {categoryTypes.map((category, id) => (
        <SidebarCategory
          onClick={tabClick}
          isActive={active === id + 1}
          title={category}
          id={id + 1}
        ></SidebarCategory>
      ))}
    </Box>
  );
};

export default Sidebar;

// long term convert users into -> build a sense community over time to get
// mobile app
