import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { default as MuiButton } from '@mui/material/Button';
import React, { useState } from 'react';

import { MenubarProps } from './Menubar.type';

export const Menubar = ({
  onClick,
  variant = 'text',
  disabled,
  color = 'inherit',
  ...rest
}: MenubarProps) => {

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
      {...rest}
    >
      {isClicked ? <CloseIcon /> : <DehazeIcon />}
    </MuiButton>
  );
};
