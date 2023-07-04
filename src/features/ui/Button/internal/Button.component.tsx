import { MuiButton } from '@/features/ui/library';

import { ButtonProps } from './Button.types';

export const Button = ({
  label,
  onClick,
  variant = 'contained',
  disabled,
  // HACK: スタイル適用まで仕方なくこれ
  color = 'error',
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={onClick}
      {...rest}
    >
      {label}
    </MuiButton>
  );
};
