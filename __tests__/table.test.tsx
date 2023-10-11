import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import { AktTable } from '../src';

describe('AktTable', () => {
  const mockColumns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' }
  ];

  const mockRows = [
    { id: 1, name: 'Test 1', age: 30 },
    { id: 2, name: 'Test 2', age: 25 }
  ];

  it('Should renders without crashing', () => {
    render(<AktTable columns={mockColumns} rows={mockRows} />);
    expect(screen.getByLabelText('akt table')).toBeInTheDocument();
  });

  it('Should renders provided columns', () => {
    render(<AktTable columns={mockColumns} rows={mockRows} />);
    mockColumns.forEach((column) => {
      expect(screen.getByText(column.label)).toBeInTheDocument();
    });
  });

  it('Should handles pagination', () => {
    render(
      <AktTable
        columns={mockColumns}
        rows={mockRows}
        rowsPerPageDefault={1}
        rowsPerPageOptions={[1, 10, 100]}
      />
    );

    const nextPageButton = screen.getByRole('button', { name: /next page/i });

    expect(screen.getByText('Test 1')).toBeInTheDocument();
    fireEvent.click(nextPageButton);
    expect(screen.getByText('Test 2')).toBeInTheDocument();
  });

  it('Should handles rowsPerPage', () => {
    render(
      <AktTable
        columns={mockColumns}
        rows={mockRows}
        rowsPerPageDefault={1}
        rowsPerPageOptions={[1, 2]}
      />
    );

    expect(screen.getAllByRole('row')).toHaveLength(2); // 1 row + 1 header

    const dropdownButton = screen.getByRole('button', {
      name: /rows per page/i
    });
    fireEvent.mouseDown(dropdownButton);

    const option2 = screen.getByText('2');
    fireEvent.click(option2);

    expect(screen.getAllByRole('row')).toHaveLength(3); // 2 rows + 1 header
  });
});
