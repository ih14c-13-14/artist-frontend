import clsx from 'clsx';

import { valiantClassNames } from './Button.constants';
import { ButtonProps } from './Button.types';

const Button = ({
  className,
  variant = 'CONTAINED',
  disabled = false,
  dataTestid,
  type = 'button',
  children,
  ...rest
}: ButtonProps) => {
  const variantClassName = valiantClassNames[variant];

  return (
    <button
      className={clsx(variantClassName, className)}
      type={type}
      disabled={disabled}
      data-testid={dataTestid}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
