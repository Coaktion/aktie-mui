import Dialog from '@mui/material/Dialog';
import React, { ReactElement } from 'react';

import Transition from './transition';

/**
 * AktDialogSlide - A dialog that slides up from the bottom of the screen.
 * @param {boolean} open - Whether the dialog is open or not.
 * @param {function} setOpen - Function to set the open state of the dialog.
 * @param {ReactElement} children - The content of the dialog.
 * @returns {ReactElement} - The dialog.
 * @example
 * <AktDialogSlide open={open} setOpen={setOpen}>
 *  <div>John Doe</div>
 * </AktDialogSlide>
 */

interface AktDialogSlideProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactElement;
}

const AktDialogSlide: React.FC<AktDialogSlideProps> = ({
  children,
  open,
  setOpen
}: AktDialogSlideProps) => {
  const handleModal = () => setOpen(!open);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleModal}
      data-testid="dialog-slide"
    >
      {children}
    </Dialog>
  );
};

export default AktDialogSlide;
