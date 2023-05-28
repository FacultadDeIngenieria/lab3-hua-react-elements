import { Meta, StoryObj } from '@storybook/react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  console.log('changes value');
};

export const HUATabs: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={0} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={0} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={0} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={0} index={2}>
        Item Three
      </TabPanel>
    </Box>
  ),
};
