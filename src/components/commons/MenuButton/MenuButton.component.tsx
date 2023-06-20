import { default as MuiButton } from '@mui/material/Button';
import { ButtonProps } from './MenuButton.type';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Typography } from '@mui/material';

export const MenuButton = ({
  label,
  onClick,
  variant = 'contained',
  disabled,
  color = 'error',
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={onClick}
      style={{ flexDirection: 'column'}}
      {...rest}
    >
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
    <DehazeIcon />
      <Typography variant="body1" style={{ fontSize: '10px' }}>
        {label}
      </Typography>
    </MuiButton>
    );
};
