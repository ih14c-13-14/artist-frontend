type Props = JSX.IntrinsicElements['img'];

const Image = ({ src, alt, ...props }: Props) => {
  return <img src={src} alt={alt} {...props} />;
};

export default Image;
