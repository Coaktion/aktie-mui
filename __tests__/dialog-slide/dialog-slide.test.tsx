import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AktDialogSlide from '../../src/dialog-slide';

const makeAktDialogSlide = () => {
  const setOpenMock = jest.fn();

  const { queryByRole, getByText } = render(
    <AktDialogSlide open={true} setOpen={setOpenMock}>
      <div>Dialog Content</div>
    </AktDialogSlide>
  );

  return {
    queryByRole,
    getByText,
    setOpenMock
  };
};

describe('Dialog Slide Tests', () => {
  it('renders the Dialog component', () => {
    const { queryByRole } = makeAktDialogSlide();
    expect(queryByRole('dialog')).toBeInTheDocument();
  });

  it('renders the children inside the Dialog', () => {
    const { getByText } = makeAktDialogSlide();
    expect(getByText('Dialog Content')).toBeInTheDocument();
  });

  it('calls setOpen with the opposite of current open state when Dialog onClose is triggered', async () => {
    const { setOpenMock } = makeAktDialogSlide();
    userEvent.keyboard('{Escape}');
    await waitFor(() => expect(setOpenMock).toHaveBeenCalledWith(false));
  });
});
