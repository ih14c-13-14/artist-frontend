import { Close, Dehaze } from '@mui/icons-material';
import { default as MuiButton } from '@mui/material/Button';
import { useState } from 'react';

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
      {isClicked ? <Close /> : <Dehaze />}
      {/* <Typography>メニュー</Typography> */}
    </MuiButton>
  );
};
