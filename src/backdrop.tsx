import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface AktBackdropLoadingProps {
  open: boolean;
  size?: number;
}

/**
 * @description
 * AktBackdropLoading is a component that displays a circular progress indicator in a backdrop.
 * @param {boolean} open
 * @param {number} size
 * @return {*}  {JSX.Element}
 * @memberof AktBackdropLoadingProps
 * @example
 * <AktBackdropLoading open={true} size={100} />
 * @see https://mui.com/components/backdrop/
 * @see https://mui.com/components/progress/
 *
 */

const AktBackdropLoading: React.FC<AktBackdropLoadingProps> = ({
  open,
  size = 80
}: AktBackdropLoadingProps) => {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress data-testid="circular-progress" size={size} />
    </Backdrop>
  );
};

export default AktBackdropLoading;
