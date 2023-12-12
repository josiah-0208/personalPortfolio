import Image from 'next/image';
import React from 'react';

type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function Icon({ src, alt, width, height }: IconProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}

export default Icon;
