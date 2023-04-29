import React from 'react';
import { useTable, Column } from 'react-table';
import styled from '@emotion/styled';
import { COLORS } from '../../common/colors';
import { Box } from '../box/index';

interface Props<T extends object> {
  columns: Column<T>[];
  data: T[];
}

export const Table = <T extends object>({ columns, data }: Props<T>) => {
  const tableInstance = useTable<T>({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <TableContainer {...getTableProps()}>
      <TableHeader>
        <TableHeaderBackground />
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TH {...column.getHeaderProps()}>{column.render('Header')}</TH>
            ))}
          </tr>
        ))}
        <TableHeaderSeparator />
      </TableHeader>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableDataCell {...cell.getCellProps()}>{cell.render('Cell')}</TableDataCell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

const TableHeader = styled.thead`
  position: relative;
  line-height: 2;
`;

const TH = styled.th`
  z-index: 2;
`;

const TableHeaderBackground = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.grey.light};
  z-index: -1;
`;

const TableContainer = styled.table`
  border-left: 4px solid ${COLORS.primary.main};
  border-radius: 6px;
  width: 100%;
  table-layout: fixed;
  z-index: 3;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

const TableHeaderSeparator = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-bottom: 1px solid ${COLORS.primary.main};
`;

const TableDataCell = styled.td`
  padding: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
`;
