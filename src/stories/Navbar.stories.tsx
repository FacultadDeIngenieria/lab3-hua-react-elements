import { Meta, StoryObj } from '@storybook/react';
import { AppBar, Typography } from '../';
import { Navbar } from '../components/navbar';

const meta: Meta<typeof AppBar> = {
  title: 'Navbar',
  component: AppBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const HUANavbar: Story = {
  render: () => (
    <Navbar>
      <Navbar.Group>
        <Navbar.Group>
          <Navbar.MenuItem>
            <Typography variant="h1" component="h1">
              LOGO
            </Typography>
          </Navbar.MenuItem>
        </Navbar.Group>
        <Navbar.Group>
          <Navbar.MenuItem>
            <Typography>Label</Typography>
          </Navbar.MenuItem>
          <Navbar.MenuItem>
            <Typography>Label</Typography>
          </Navbar.MenuItem>
          <Navbar.MenuItem>
            <Typography>Label</Typography>
          </Navbar.MenuItem>
        </Navbar.Group>
      </Navbar.Group>
      <Navbar.Group>
        <Navbar.MenuItem>
          <Typography variant="h1" component="h1">
            User
          </Typography>
        </Navbar.MenuItem>
      </Navbar.Group>
    </Navbar>
  ),
};
