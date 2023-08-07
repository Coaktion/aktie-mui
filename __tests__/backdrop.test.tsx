import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import AktBackdrop from '../src/backdrop';

describe('AktBackdrop', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<AktBackdrop open={true} />);
    expect(getByTestId('circular-progress')).toBeInTheDocument();
  });

  it('should render with size 100', () => {
    const { getByTestId } = render(<AktBackdrop open={true} size={100} />);
    expect(getByTestId('circular-progress')).toHaveStyle('width: 100px');
    expect(getByTestId('circular-progress')).toHaveStyle('height: 100px');
  });
});
