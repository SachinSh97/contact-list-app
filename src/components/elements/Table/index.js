import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import './Table.scss';

const MaterialTable = ({
  columns,
  rows,
  minWidth,
  selectedId,
  onSelectContact,
}) => {
  const renderColumns = (cols) =>
    cols?.map((col, index) => (
      <TableCell
        key={col?.accessor ?? index}
        classes={{ root: 'material-table_header_cell' }}
      >
        {col?.title ?? ''}
      </TableCell>
    )) ?? [];

  const renderRows = (dataRows, cols) =>
    dataRows?.map((row, index) => (
      <TableRow
        key={row?.id ?? index}
        classes={{
          root: classNames('material-table_body_row', {
            selected: row?.id === selectedId,
          }),
        }}
        onClick={() => onSelectContact(row?.id)}
      >
        {cols?.map((col, index) => (
          <TableCell
            key={`${col?.accessor}-${index}`}
            classes={{ root: 'material-table_body_cell' }}
          >
            {row?.[col?.accessor] ?? ''}
          </TableCell>
        ))}
      </TableRow>
    ));

  return (
    <TableContainer>
      <Table sx={{ minWidth: minWidth }} aria-label="material table">
        {columns?.length > 0 && (
          <TableHead classes={{ root: 'material-table_header' }}>
            <TableRow>{renderColumns(columns)}</TableRow>
          </TableHead>
        )}
        <TableBody>{renderRows(rows, columns)}</TableBody>
      </Table>
    </TableContainer>
  );
};

MaterialTable.defaultProps = {
  minWidth: '',
  selectedId: '',
  onSelectContact: () => {},
};

MaterialTable.propTypes = {
  columns: Proptypes.arrayOf(Object).isRequired,
  rows: Proptypes.arrayOf(Object).isRequired,
  minWidth: Proptypes.number,
  selectedId: Proptypes.string,
  onSelectContact: Proptypes.func,
};

export default MaterialTable;
