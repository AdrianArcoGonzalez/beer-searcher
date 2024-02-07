import CustomImageStyled from "./CustomImageStyled";

interface CustomImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}
const CustomImage = ({
  src,
  alt,
  height = 180,
  width = 80,
}: CustomImageProps) => {
  return (
    <CustomImageStyled
      alt={alt}
      src={src ?? "/beer.png"}
      aria-label={alt}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
