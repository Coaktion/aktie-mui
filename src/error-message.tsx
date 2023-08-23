import Box from '@mui/material/Box';
import React from 'react';

/**
 * AktErrorMessage
 * @param {string} error - error message to be displayed
 * @param {string} borderPx - border width in px of the error message box
 * @param {string} borderRadiusPx - border radius in px of the error message box
 * @param {number} padding - padding in px of the error message box
 * @param {number} marginTop - margin top in px of the error message box
 * @param {string} borderColor - border color of the error message box
 * @param {string} backgroundColor - background color of the error message box
 * @param {string} color - text color of the error message box
 * @returns {React.FC<Props>}
 * @constructor
 * @component
 * @example
 * <AktErrorMessage error="This is an error message" />
 */

type Props = {
  error: string;
  borderPx?: string;
  borderRadiusPx?: string;
  padding?: number;
  marginTop?: number;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
};

const AktErrorMessage: React.FC<Props> = ({
  error,
  borderPx = '1px',
  borderRadiusPx = '5px',
  marginTop = 1,
  padding = 1,
  borderColor = '#F87E96',
  backgroundColor = '#F9DBE1',
  color = '#F9224C'
}: Props) => {
  return (
    <Box
      padding={padding}
      sx={{
        border: `${borderPx} solid ${borderColor}`,
        borderRadius: borderRadiusPx,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`
      }}
      marginTop={marginTop}
      maxWidth="99%"
      data-testid="error-wrap"
    >
      {error}
    </Box>
  );
};

export default AktErrorMessage;
