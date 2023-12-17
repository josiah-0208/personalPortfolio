import Image from 'next/image';
import React from 'react';

export type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  content?: string;
};

function LinkIcon({ src, alt, width, height, content }: IconProps) {
  return (
    <div className="flex">
      <Image src={src} alt={alt} width={width} height={height} />
      <div>{content}</div>
    </div>
  );
}

export default LinkIcon;
