import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '../index';
import { COLORS } from '../common/colors';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

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

export const HUAAccordion: Story = {
  render: () => (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography>Accordion 1</Typography>
            <Typography>15/20</Typography>
          </div>

          {/*<div style={{ position: 'absolute', marginRight: '48px', marginTop: '12px', top: '0', right: '0' }}>*/}
          {/*  <Typography>15/20</Typography>*/}
          {/*</div>*/}
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer style={{ borderTop: '1px solid ' + COLORS.primary.main }}>
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  ),
};
