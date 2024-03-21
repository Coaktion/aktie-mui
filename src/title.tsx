import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CSSProperties } from 'react';

/**
 * @description
 * A component for displaying a title and subtitle pattern
 * @typedef {Object} AktTitleProps
 * @property {string} title - The title of the component
 * @property {string} subTitle - The subtitle of the component
 * @property {CSSProperties} [boxStyles] - The styles for the box
 * @property {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [titleVariant] - The variant for the title
 * @property {'caption' | 'subtitle1' | 'subtitle2'} [subTitleVariant] - The variant for the subtitle
 * @property {CSSProperties} [titleStyles] - The styles for the title
 * @property {CSSProperties} [subTitleStyles] - The styles for the subtitle
 * @example
 * <AktTitle title="Title" subTitle="Subtitle" />
 * <AktTitle title="Title" subTitle="Subtitle" titleVariant="h1" subTitleVariant="subtitle1" />
 * <AktTitle title="Title" subTitle="Subtitle" titleStyles={{ color: 'red' }} subTitleStyles={{ color: 'blue' }} />
 */

interface AktTitleProps {
  title: string;
  subTitle: string;
  boxStyles?: CSSProperties;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subTitleVariant?: 'caption' | 'subtitle1' | 'subtitle2';
  titleStyles?: CSSProperties;
  subTitleStyles?: CSSProperties;
}

const AktTitle: React.FC<AktTitleProps> = ({
  subTitle,
  title,
  boxStyles,
  titleVariant = 'h4',
  subTitleVariant = 'caption',
  subTitleStyles = { fontSize: '1.1rem', color: '#616161' },
  titleStyles = { fontWeight: 'bold', marginBottom: '15px', fontSize: '1.7rem' }
}: AktTitleProps) => {
  return (
    <Box sx={{ ...boxStyles }}>
      <Typography
        data-testid="title"
        variant={titleVariant}
        sx={{ ...titleStyles }}
      >
        {title}
      </Typography>
      <Typography
        data-testid="subTitle"
        variant={subTitleVariant}
        sx={{ ...subTitleStyles }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default AktTitle;
