import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../';
import { Sidebar } from '../components/sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const HUASidebar: Story = {
  render: () => (
    <Sidebar>
      <Sidebar.MenuItem>
        <Typography variant="h2" component="h2">
          LOGO & icon
        </Typography>
      </Sidebar.MenuItem>
      <Sidebar.MenuItem>
        <Typography variant="h3" component="h3">
          Category 1
        </Typography>
      </Sidebar.MenuItem>
      <Sidebar.SubMenuItem>
        <Typography variant="h5">Subcategory 1.1</Typography>
      </Sidebar.SubMenuItem>
      <Sidebar.SubMenuItem>
        <Typography variant="h5">Subcategory 1.2</Typography>
      </Sidebar.SubMenuItem>
      <Sidebar.MenuItem>
        <Typography variant="h3" component="h3">
          Category 2
        </Typography>
      </Sidebar.MenuItem>
      <Sidebar.SubMenuItem>
        <Typography variant="h5">Subcategory 2.1</Typography>
      </Sidebar.SubMenuItem>
      <Sidebar.SubMenuItem>
        <Typography variant="h5">Subcategory 2.2</Typography>
      </Sidebar.SubMenuItem>
    </Sidebar>
  ),
};
