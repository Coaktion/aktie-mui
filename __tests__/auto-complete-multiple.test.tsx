import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import AktAutoCompleteMultiple from '../src/auto-complete-multiple';

describe('AktAutoCompleteMultiple', () => {
  const mockOptions = ['Selecionar Todos', 'Option1', 'Option2'];
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <AktAutoCompleteMultiple
        allSelectOption="Selecionar Todos"
        rows={mockOptions}
        value={[]}
        onChange={mockOnChange}
      />
    );
  });

  it('should render the component', () => {
    expect(screen.getByTestId('auto-complete-input')).toBeInTheDocument();
  });

  it('should show the options when the element has focus', () => {
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    expect(screen.getByText('Option1')).toBeInTheDocument();
  });

  it('should call onChange with selected values', () => {
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    const option = screen.getByText('Option1');
    fireEvent.click(option);
    expect(mockOnChange).toHaveBeenCalledWith(['Option1']);
  });

  it('should display chips for selected values', () => {
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    const option1 = screen.getByText('Option1');
    fireEvent.click(option1);
    fireEvent.blur(screen.getByTestId('auto-complete'));
    expect(mockOnChange).toHaveBeenCalledWith(['Option1']);
  });

  it('should close the list when clicking outside', () => {
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    fireEvent.blur(screen.getByTestId('auto-complete'));
    expect(
      screen.queryByTestId('auto-complete-option')
    ).not.toBeInTheDocument();
  });

  it('Should select all the values when clicing on allSelect Option', () => {
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    const allSelectOption = screen.getByText('Selecionar Todos');
    fireEvent.click(allSelectOption);
    expect(mockOnChange).toHaveBeenCalledWith(['Option1', 'Option2']);
  });

  it('Should clear all the values when clicing on allSelect Option and all values are selected', () => {
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    const allSelectOption = screen.getByText('Selecionar Todos');
    const option1 = screen.getByText('Option1');
    const option2 = screen.getByText('Option2');
    fireEvent.click(allSelectOption);
    fireEvent.blur(screen.getByTestId('auto-complete'));
    fireEvent.focus(screen.getByTestId('auto-complete-input'));
    fireEvent.click(allSelectOption);

    expect(option1).not.toBeInTheDocument();
    expect(option2).not.toBeInTheDocument();
  });
});
