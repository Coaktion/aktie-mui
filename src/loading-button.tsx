import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { CSSProperties, ReactNode } from 'react';

/**
 * @typedef {Object} AktLoadingButtonProps
 * @property {ReactNode} buttonText - The text of the button
 * @property {() => void} [handleClick] - The click handler of the button
 * @property {boolean} [loading] - The loading state of the button
 * @property {ReactNode} [loadingComponent] - The loading component of the button
 * @property {CSSProperties} [buttonStyle] - The styles for the button
 * @property {CSSProperties} [loadingStyle] - The styles for the loading component
 * @example
 * <AktLoadingButton buttonText="Test Button" />
 */

interface AktLoadingButtonProps
  extends Omit<ButtonProps, 'children' | 'onClick'> {
  handleClick?: any;
  loading?: boolean;
  buttonText: ReactNode;
  loadingComponent?: ReactNode;
  buttonStyle?: CSSProperties;
  loadingStyle?: CSSProperties;
}

const AktLoadingButton: React.FC<AktLoadingButtonProps> = ({
  buttonText,
  handleClick = () => {},
  loading = false,
  loadingComponent = <CircularProgress color="secondary" size={30} />,
  buttonStyle,
  loadingStyle,
  ...buttonProps
}) => {
  return (
    <Button
      {...buttonProps}
      style={buttonStyle}
      onClick={handleClick}
      data-testid="akt-loading-button"
    >
      {loading ? (
        <Typography style={loadingStyle}>{loadingComponent}</Typography>
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default AktLoadingButton;
