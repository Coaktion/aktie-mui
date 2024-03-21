import { render, screen } from '@testing-library/react';

import { AktTitle } from '../src';

describe('AktTitle', () => {
  it('should renders the title and subtitle correctly', () => {
    const title = 'Test Title';
    const subTitle = 'Test Subtitle';

    render(<AktTitle title={title} subTitle={subTitle} />);

    const titleElement = screen.getByTestId('title');
    const subTitleElement = screen.getByTestId('subTitle');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);

    expect(subTitleElement).toBeInTheDocument();
    expect(subTitleElement).toHaveTextContent(subTitle);
  });
});
