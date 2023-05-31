type VariantKey = 'CONTAINED' | 'OUTLINED' | 'PLAIN' | 'CALL_TO_ACTION';

export type ButtonProps = {
  variant: VariantKey;
  disabled?: boolean;
  dataTestid?: string;
} & JSX.IntrinsicElements['button'];

const Button = ({
  // variant,
  type = 'button',
  disabled = false,
  dataTestid,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      data-testid={dataTestid}
      type={type}
      disabled={disabled}
      {...restProps}
    />
  );
};

export default Button;
