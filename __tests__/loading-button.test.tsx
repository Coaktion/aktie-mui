import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';

import { AktLoadingButton } from '../src';

describe('AktLoadingButton', () => {
  it('Should renders without crashing', () => {
    render(<AktLoadingButton buttonText="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('Should displays loading component when loading', () => {
    render(<AktLoadingButton loading buttonText="Test Button" />);
    const loadingComponent = screen.getByRole('progressbar');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('Should invokes handleClick callback when clicked', () => {
    const handleClick = jest.fn();
    render(
      <AktLoadingButton buttonText="Test Button" handleClick={handleClick} />
    );

    const button = screen.getByTestId('akt-loading-button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should invokes default handleClick callback when clicked', () => {
    render(<AktLoadingButton buttonText="Test Button" />);

    const button = screen.getByTestId('akt-loading-button');
    fireEvent.click(button);

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});
