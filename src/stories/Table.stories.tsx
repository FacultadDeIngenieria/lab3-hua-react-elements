import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '../';
import { Meta, StoryObj } from '@storybook/react';

type RowData = {
  id: string;
  fecha: Date;
  area: string;
  comentario: string;
};

const generateRowsData = (): RowData[] => {
  const areas = ['torax', 'abdomen', 'piernas', 'brazos'];
  const comentarios = ['fractura sobreexpuesta grave', 'inflamación', 'lesión', 'tumor'];
  const now = new Date();
  const recentDates = Array.from({ length: 5 }, (_, i) => new Date(now.getTime() - i * 24 * 60 * 60 * 1000));

  return Array.from({ length: 5 }, (_, i) => ({
    id: 'id',
    fecha: recentDates[i],
    area: areas[i % areas.length],
    comentario: `${comentarios[i % comentarios.length]} en el ${areas[i % areas.length]}`,
  }));
};

const rowsData = generateRowsData();

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const HUATable: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Área</TableCell>
            <TableCell>Comentario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.fecha.toLocaleDateString()}</TableCell>
              <TableCell>{row.area}</TableCell>
              <TableCell>{row.comentario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
