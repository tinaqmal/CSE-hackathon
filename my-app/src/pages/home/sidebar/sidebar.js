import { Box, Text } from '@chakra-ui/react';
import categoryTypes from '../categoryTypes';
import SidebarCategory from './sidebar-category';

const Sidebar = ({ active, tabClick }) => {
  return (
    <Box width="10%" mr="8">
      {categoryTypes.map((category, id) => (
        <SidebarCategory
          onClick={tabClick}
          isActive={active === id}
          title={category}
          id={id}
        ></SidebarCategory>
      ))}
    </Box>
  );
};

export default Sidebar;

// long term convert users into -> build a sense community over time to get
// mobile app
