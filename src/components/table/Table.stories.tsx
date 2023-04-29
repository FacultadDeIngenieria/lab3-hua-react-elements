import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../table/index';

const meta: Meta<typeof Table> = {
  title: 'common/Table',
  component: Table,
  tags: ['autodocs'],
};

interface Image {
  id: string;
  date: number;
  area: string;
}

const data: Image[] = [
  {
    id: '123rjj123123kj1',
    date: Date.now(),
    area: 'Thorax',
  },
  {
    id: '123rjj123123k324',
    date: Date.now(),
    area: 'Thorax',
  },
  {
    id: '123rjj123123d6a',
    date: Date.now(),
    area: 'Thorax',
  },
  {
    id: '123rjj123123laj',
    date: Date.now(),
    area: 'Thorax',
  },
  {
    id: '123rjj123123ñla',
    date: Date.now(),
    area: 'Thorax',
  },
];

const colomns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Area',
    accessor: 'area',
  },
];

export default meta;
type Story = StoryObj<typeof Table>;

export const HuaTabble: Story = {
  render: () => <Table columns={colomns} data={data} />,
};
