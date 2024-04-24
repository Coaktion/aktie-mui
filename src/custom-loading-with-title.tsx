import { Box, CircularProgress, Typography, styled } from '@mui/material';
import React from 'react';

/**
 * @description
 * A component for displaying a loading spinner with a title
 * @typedef {Object} AktLoadingSpinnerWithTitle
 * @property {string} title - The title of the loading spinner
 * @property {string} [subTitle] - The subtitle of the loading spinner
 * @property {number} [size] - The size of the circular progress
 */

interface AktLoadingSpinnerWithTitleProps {
  title: string;
  subTitle?: string | null;
  size?: number;
}

const SpinLoadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(10),
  gap: theme.spacing(2)
}));

const TitlesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
  gap: theme.spacing(0.5)
}));

const LoadingSubTitle = styled(Typography)(() => ({
  fontSize: '1rem',
  color: 'gray',
  fontWeight: 500
}));

const AktLoadingSpinnerWithTitle: React.FC<AktLoadingSpinnerWithTitleProps> = ({
  title,
  subTitle = '',
  size = 100
}: AktLoadingSpinnerWithTitleProps) => {
  return (
    <SpinLoadingContainer>
      <CircularProgress color="primary" size={size} />
      <TitlesContainer>
        <Typography variant="h6">{title}</Typography>
        <LoadingSubTitle>{subTitle}</LoadingSubTitle>
      </TitlesContainer>
    </SpinLoadingContainer>
  );
};

export default AktLoadingSpinnerWithTitle;
