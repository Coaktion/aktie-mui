import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface BackdropLoadingProps {
  open: boolean;
  size?: number;
}

const BackdropLoading: React.FC<BackdropLoadingProps> = (
  { open, size = 80 }: BackdropLoadingProps
) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress size={size} />
    </Backdrop>
  )
}

export default BackdropLoading;