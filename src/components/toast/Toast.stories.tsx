import { Meta, StoryObj } from '@storybook/react';
import { Toast } from './index';
import { action } from '@storybook/addon-actions';
import { Button } from '../button/index';
import React from 'react';

const meta: Meta<typeof Toast> = {
  title: 'common/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

const notify = () => {
  action('clicked');
};

export const HUAToast: Story = {
  args: {
    type: 'success',
    message: 'Musitoken , I hate you',
  },
  render: ({ type, message }) => (
    <Toast message={message} type={type} onTrigger={notify}>
      <Button variant={'primary'} size={'large'}>
        Mostrar Toast
      </Button>
    </Toast>
  ),
};
