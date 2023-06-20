import { default as MuiButton } from '@mui/material/Button';
import { ButtonProps } from './MenuButton.type';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

export const MenuButton = ({
  label,
  onClick,
  variant = 'contained',
  disabled,
  color = 'error',
  ...rest
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(!isClicked);
    onClick?.(event);
  };

  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={handleClick}
      style={{ flexDirection: 'column' }}
      {...rest}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      />
      {isClicked ? <CloseIcon /> : <DehazeIcon />}
      <Typography variant="body1" style={{ fontSize: '10px' }}>
        {label}
      </Typography>
    </MuiButton>
  );
};
