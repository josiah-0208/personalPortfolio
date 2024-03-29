'use client';
import React, { useEffect, useState } from 'react';

type TypingAnimationProps = {
  title: string;
};

const TypingAnimation = ({ title }: TypingAnimationProps) => {
  const [tempTitle, setTempTitle] = useState<string>('');
  const [titleCnt, setTitleCnt] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setTimeout(() => {
      setTempTitle((pre) => pre + title[titleCnt]);
      setTitleCnt((pre) => pre + 1);
    }, 50);

    if (title.length === titleCnt) {
      clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [titleCnt]);
  return (
    <h2 className="h-[68px] w-[272px] whitespace-pre text-[24px] font-semibold leading-snug text-fontColorSky drop-shadow-lg lg:h-full lg:w-[404px] lg:text-[36px]">
      {tempTitle}
    </h2>
  );
};

export default TypingAnimation;
