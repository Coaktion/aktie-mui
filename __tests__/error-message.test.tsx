import { render } from '@testing-library/react';

import AktErrorMessage from '../src/error-message';

describe('Error messages tests', () => {
  it('Should renders without crashing', () => {
    const { getByTestId } = render(<AktErrorMessage error="Test error" />);
    expect(getByTestId('error-wrap')).toHaveTextContent('Test error');
  });

  it('Should applies custom styles based on props', () => {
    const customProps = {
      borderRadiusPx: '10px',
      backgroundColor: '#654321',
      color: '#abcdef'
    };

    const { getByTestId } = render(
      <AktErrorMessage error="Test error" {...customProps} />
    );
    const errorBox = getByTestId('error-wrap');

    expect(errorBox).toHaveStyle(`borderRadius: ${customProps.borderRadiusPx}`);
    expect(errorBox).toHaveStyle(
      `backgroundColor: ${customProps.backgroundColor}`
    );
    expect(errorBox).toHaveStyle(`color: ${customProps.color}`);
  });
});
