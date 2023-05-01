import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { Option } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const CustomDropdown: Story = {
  args: {
    options: options,
    disabled: false,
    loading: false,
    clearable: true,
    searchable: true,
    name: 'dropdown',
    defaultValue: null,
    placeholder: 'Select an option...',
    multi: false,
  },
  render: ({ options, disabled, loading, clearable, searchable, name, defaultValue, placeholder, multi }) => (
    <Dropdown
      options={options}
      disabled={disabled}
      loading={loading}
      clearable={clearable}
      searchable={searchable}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      multi={multi}
    />
  ),
};
