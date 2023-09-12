/* eslint-disable no-console */
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import AktAutoComplete from '../src/auto-complete';

const makeAutoComplete = (rows: any[], groupKey = 'name', value = '') => {
  const onChange = jest.fn();
  const { getByTestId, container, queryByTestId, queryByText } = render(
    <AktAutoComplete
      rows={rows}
      textKey="name"
      valueKey="name"
      listItemKey="id"
      groupKey={groupKey}
      onChange={onChange}
      value={value}
    />
  );

  return {
    onChange,
    getByTestId,
    queryByTestId,
    queryByText,
    container
  };
};

describe('AktAutoComplete Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render with correct values', () => {
    const { getByTestId } = makeAutoComplete([
      {
        id: '1',
        name: 'test'
      }
    ]);
    expect(getByTestId('auto-complete')).toBeTruthy();
  });

  it('should calls onChange with correct values', () => {
    const { getByTestId, onChange } = makeAutoComplete([
      {
        id: '2',
        name: 'test2'
      }
    ]);

    fireEvent.click(getByTestId('auto-complete-input-end-adornment'));
    fireEvent.click(getByTestId('auto-complete-option'));

    expect(onChange).toHaveBeenCalledWith('test2');
  });

  it('should set the group name correctly', () => {
    const { getByTestId } = makeAutoComplete([
      {
        id: '1',
        name: 'testGroup'
      }
    ]);

    fireEvent.click(getByTestId('auto-complete-input-end-adornment'));
    expect(getByTestId('auto-complete-group')).toBeTruthy();
    expect(getByTestId('auto-complete-group').textContent).toBe('testGroup');
  });

  it('should close the list when clicking on the icon', () => {
    const { getByTestId } = makeAutoComplete([
      {
        id: '1',
        name: 'test'
      }
    ]);

    fireEvent.click(getByTestId('auto-complete-input-end-adornment-icon'));
    fireEvent.click(getByTestId('auto-complete-input-end-adornment-icon'));
    expect(getByTestId('auto-complete').textContent).not.toBe('test');
  });

  it('should close the list when clicking outside', () => {
    const { getByTestId, queryByTestId } = makeAutoComplete([
      {
        id: '1',
        name: 'test'
      }
    ]);

    fireEvent.click(getByTestId('auto-complete-input-end-adornment'));
    fireEvent.blur(getByTestId('auto-complete'));
    expect(queryByTestId('auto-complete-option')).not.toBeInTheDocument();
  });

  it('should have empty group if group key is not informed', () => {
    const { getByTestId } = makeAutoComplete(
      [
        {
          id: '1',
          name: 'test'
        }
      ],
      ''
    );

    fireEvent.click(getByTestId('auto-complete-input-end-adornment'));
    expect(getByTestId('auto-complete-group').textContent).toBe('');
  });

  it('should have value in the document if value is informed', () => {
    makeAutoComplete(
      [
        {
          id: '1',
          name: 'TEST VALUE'
        }
      ],
      '',
      'TEST VALUE'
    );

    const input = screen.getByRole('combobox');

    expect(input).toHaveAttribute('value', 'TEST VALUE');
  });
});
