
import Image, { StaticImageData } from "next/image";
import { memo } from "react";

interface ImagePropTypes {
  src: string | StaticImageData;
  alt: string;
  transform?: string;
}

const customImagestyles = {
  width: "100%",
  height: "100%",
};

function CustomImage({ src, alt, transform }: ImagePropTypes) {
  return (
    <Image
      alt={alt}
      style={{
        ...customImagestyles,
        transform: transform && `skewX(${transform})`,
      }}
      width={100}
      height={100}
      src={`${src}`}
    />
  );
}

export default memo(CustomImage);
