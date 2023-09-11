import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import AktAutoCompleteMultiple from '../src/auto-complete-multiple';

describe('AktAutoCompleteMultiple', () => {
  const mockOptions = ['Option1', 'Option2'];
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <AktAutoCompleteMultiple rows={mockOptions} onChange={mockOnChange} />
    );
  });

  it('should render the component', () => {
    expect(screen.getByTestId('auto-complete-input')).toBeInTheDocument();
  });

  it('should toggle dropdown on arrow icon click', () => {
    const arrowIcon = screen.getByTestId('auto-complete-arrow');
    fireEvent.click(arrowIcon);
    expect(screen.getByText('Option1')).toBeInTheDocument();
  });

  it('should call onChange with selected values', () => {
    const arrowIcon = screen.getByTestId('auto-complete-arrow');
    fireEvent.click(arrowIcon);

    const option = screen.getByText('Option1');
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalledWith(['Option1']);
  });

  it('should display chips for selected values', () => {
    const arrowIcon = screen.getByTestId('auto-complete-arrow');
    fireEvent.click(arrowIcon);

    const option1 = screen.getByText('Option1');
    fireEvent.click(option1);

    fireEvent.click(arrowIcon);

    const option2 = screen.getByText('Option2');
    fireEvent.click(option2);

    expect(screen.getByText('Option1')).toBeInTheDocument();
    expect(screen.getByText('Option2')).toBeInTheDocument();
  });

  it('should close the list when clicking outside', () => {
    fireEvent.click(screen.getByTestId('auto-complete-arrow'));
    fireEvent.blur(screen.getByTestId('auto-complete'));
    expect(
      screen.queryByTestId('auto-complete-option')
    ).not.toBeInTheDocument();
  });
});
