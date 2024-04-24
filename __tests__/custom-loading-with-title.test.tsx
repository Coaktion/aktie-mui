import { render, screen } from '@testing-library/react';

import AktLoadingSpinnerWithTitle from '../src/custom-loading-with-title';

describe('AktLoadingSpinnerWithTitle', () => {
  it('Should render the loading spinner with title and subtitle', () => {
    const title = 'Loading...';
    const subTitle = 'Please wait';
    const size = 100;

    render(
      <AktLoadingSpinnerWithTitle
        title={title}
        subTitle={subTitle}
        size={size}
      />
    );

    const loadingSpinner = screen.getByRole('progressbar');
    const loadingTitle = screen.getByText(title);
    const loadingSubTitle = screen.getByText(subTitle);

    expect(loadingSpinner).toBeInTheDocument();
    expect(loadingTitle).toBeInTheDocument();
    expect(loadingSubTitle).toBeInTheDocument();
  });

  it('Should render the loading spinner without subtitle', () => {
    const title = 'Loading...';
    const size = 100;

    render(<AktLoadingSpinnerWithTitle title={title} size={size} />);

    const loadingSpinner = screen.getByRole('progressbar');
    const loadingTitle = screen.getByText(title);

    expect(loadingSpinner).toBeInTheDocument();
    expect(loadingTitle).toBeInTheDocument();
  });

  it('Should render the loading spinner with default size', () => {
    const title = 'Loading...';
    const subTitle = 'Please wait';

    render(<AktLoadingSpinnerWithTitle title={title} subTitle={subTitle} />);

    const loadingSpinner = screen.getByRole('progressbar');
    const loadingTitle = screen.getByText(title);
    const loadingSubTitle = screen.getByText(subTitle);

    expect(loadingSpinner).toBeInTheDocument();
    expect(loadingTitle).toBeInTheDocument();
    expect(loadingSubTitle).toBeInTheDocument();
  });
});
