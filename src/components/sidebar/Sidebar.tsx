import { Box } from '../..';
import styled from '@emotion/styled';
import { theme } from '../theme/Theme';
import { AppBarProps } from '@mui/material';

const SidebarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 100vh;
  background-color: ${theme.palette.primary.main};
`;

const MenuItem = styled(Box)`
  display: flex;
  align-items: center;
  color: white;
  padding: 8px 16px;

  &:hover {
    background-color: ${theme.palette.primary.light};
  }
`;

const SubMenuItem = styled(Box)`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 20px;
  padding: 4px 12px;

  &:hover {
    background-color: ${theme.palette.primary.light};
  }
`;

const Sidebar = ({ children }: { children: AppBarProps }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

Sidebar.MenuItem = MenuItem;
Sidebar.SubMenuItem = SubMenuItem;

export { Sidebar };
