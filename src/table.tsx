import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CSSProperties, useState } from 'react';

/**
 * @typedef {Object} AktTableColumn
 * @property {string} id - The id of the column
 * @property {string} label - The label of the column
 * @property {number} [minWidth] - The minimum width of the column
 * @property {'left' | 'right' | 'center'} [align] - The alignment of the column
 */

export interface AktTableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
}

/**
 * @typedef {Object} AktTableProps
 * @property {AktTableColumn[]} columns - The columns of the table
 * @property {any[]} rows - The rows of the table
 * @property {number} [rowsPerPageDefault] - The default number of rows per page
 * @property {number[]} [rowsPerPageOptions] - The options for the number of rows per page
 * @property {string} [rowsPerPageLabel] - The label for the number of rows per page
 * @property {CSSProperties} [tableHeadStyles] - The styles for the table head
 * @property {CSSProperties} [tableStyles] - The styles for the table
 * @property {(rowsPerPage: number) => Promise<void>} [rowsPerPageFunction] - The function to call when the rows per page changes
 * @example
 * const columns = [
 *  { id: 'name', label: 'Name' },
 *  { id: 'age', label: 'Age' }
 * ];
 *
 * const rows = [
 *  { id: 1, name: 'Test 1', age: 30 },
 *  { id: 2, name: 'Test 2', age: 25 }
 * ];
 *
 * <AktTable columns={columns} rows={rows} />
 */

interface AktTableProps {
  columns: AktTableColumn[];
  rows: any[];
  rowsPerPageDefault?: number;
  rowsPerPageOptions?: number[];
  rowsPerPageLabel?: string;
  tableHeadStyles?: CSSProperties;
  tableStyles?: CSSProperties;
  rowsPerPageFunction?: (rowsPerPage: number) => Promise<void>;
  paperStyles?: CSSProperties;
}

const AktTable: React.FC<AktTableProps> = ({
  columns,
  rows,
  rowsPerPageDefault = 10,
  rowsPerPageOptions = [10, 25, 100],
  rowsPerPageLabel = 'Rows per page',
  tableHeadStyles,
  tableStyles,
  rowsPerPageFunction,
  paperStyles = { width: '100%' }
}: AktTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageDefault);

  const handleChangePage = async (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (rowsPerPageFunction) await rowsPerPageFunction(+event.target.value);
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ ...paperStyles }}>
      <TableContainer style={tableStyles}>
        <Table stickyHeader aria-label="akt table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  style={{ minWidth: column.minWidth, ...tableHeadStyles }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover key={row.id}>
                  {columns.map((column) => {
                    const value: any = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align || 'left'}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={rowsPerPageLabel}
      />
    </Paper>
  );
};

export default AktTable;
