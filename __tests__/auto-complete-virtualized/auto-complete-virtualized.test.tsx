import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import AutoCompleteVirtualized from '../../src/auto-complete-virtualized';

const makeAutocompleteVirtualized = (valueProps = '', valueKeyProps = '') => {
  const mockHandleChange = jest.fn();

  const props = {
    rows: [
      { label: 'Option1' },
      { label: 'Option2' },
      { label: 'Option3' }
    ] as any[],
    handleChange: mockHandleChange,
    placeholder: 'Select an option...',
    value: valueProps,
    valueKey: valueKeyProps,
    labelKey: 'label'
  };

  const { getByTestId } = render(<AutoCompleteVirtualized {...props} />);

  return { getByTestId, props, mockHandleChange };
};

describe('AutoCompleteVirtualized', () => {
  it('Should render without crashing', () => {
    makeAutocompleteVirtualized();
    expect(screen.getByLabelText('Select an option...')).toBeInTheDocument();
  });

  it('Should renders provided rows', async () => {
    const { props, getByTestId } = makeAutocompleteVirtualized();
    fireEvent.click(getByTestId('ArrowDropDownIcon'));
    props.rows.forEach((row) => {
      expect(screen.getByText(row[props.labelKey])).toBeInTheDocument();
    });
  });

  it('Should calls handleChange on option selection', () => {
    const { props, mockHandleChange, getByTestId } =
      makeAutocompleteVirtualized();
    fireEvent.click(getByTestId('ArrowDropDownIcon'));
    const option = screen.getByText(props.rows[0][props.labelKey]);
    fireEvent.click(option);
    expect(mockHandleChange).toHaveBeenCalledWith(props.rows[0]);
  });

  it('should close the list when clicking on the icon', () => {
    const { getByTestId, props } = makeAutocompleteVirtualized();

    fireEvent.click(getByTestId('ArrowDropDownIcon'));
    fireEvent.click(getByTestId('ArrowDropDownIcon'));
    expect(
      screen.queryByText(props.rows[0][props.labelKey])
    ).not.toBeInTheDocument();
  });

  it('should have value in the document if value is informed', () => {
    makeAutocompleteVirtualized('Option2', 'label');
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('value', 'Option2');
  });
});
