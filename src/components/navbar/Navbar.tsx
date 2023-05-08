import { AppBar, AppBarProps, Box, Toolbar } from '../..';
import styled from '@emotion/styled';
import { theme } from '../theme/Theme';

const Navbar = ({ children }: AppBarProps) => {
  return (
    <AppBar>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

const Group = styled(Box)`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  display: flex;
`;

const MenuItem = styled(Box)`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${theme.palette.primary.light};
  }
`;

Navbar.MenuItem = MenuItem;
Navbar.Group = Group;

export { Navbar };
