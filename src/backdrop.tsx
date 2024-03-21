import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { CSSProperties } from 'react';

/**
 * @description
 * A component for displaying a backdrop loading pattern
 * @typedef {Object} AktBackdropLoadingProps
 * @property {boolean} open - The open state of the backdrop
 * @property {number} [size] - The size of the circular progress
 * @property {string} [title] - The title of the backdrop
 * @property {string} [subTitle] - The subtitle of the backdrop
 * @property {CSSProperties} [backdropStyles] - The styles for the backdrop
 * @property {CSSProperties} [containerStyles] - The styles for the container
 * @property {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [titleVariant] - The variant for the title
 * @property {'caption' | 'subtitle1' | 'subtitle2'} [subTitleVariant] - The variant for the subtitle
 * @property {CSSProperties} [titleStyles] - The styles for the title
 * @property {CSSProperties} [subTitleStyles] - The styles for the subtitle
 * @example
 * <AktBackdropLoading open={true} title="Title" subTitle="Subtitle" />
 * <AktBackdropLoading open={true} title="Title" subTitle="Subtitle" titleVariant="h1" subTitleVariant="subtitle1" />
 */

interface AktBackdropLoadingProps {
  open: boolean;
  size?: number;
  title?: string;
  subTitle?: string;
  backdropStyles?: CSSProperties;
  containerStyles?: CSSProperties;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subTitleVariant?: 'caption' | 'subtitle1' | 'subtitle2';
  titleStyles?: CSSProperties;
  subTitleStyles?: CSSProperties;
}

const AktBackdropLoading: React.FC<AktBackdropLoadingProps> = ({
  open,
  size = 120,
  subTitle,
  title,
  backdropStyles = {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    gap: 10
  },
  containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  },
  titleVariant = 'h4',
  subTitleVariant = 'caption',
  titleStyles = {},
  subTitleStyles = {
    color: '#616161',
    fontSize: '16px',
    marginTop: '20px'
  }
}: AktBackdropLoadingProps) => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...backdropStyles
      }}
      open={open}
    >
      <CircularProgress data-testid="circular-progress" size={size} />

      <Box
        sx={{
          ...containerStyles
        }}
      >
        <Typography
          data-testid="title"
          variant={titleVariant}
          sx={{
            ...titleStyles
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            ...subTitleStyles
          }}
          data-testid="subTitle"
          variant={subTitleVariant}
        >
          {subTitle}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default AktBackdropLoading;
