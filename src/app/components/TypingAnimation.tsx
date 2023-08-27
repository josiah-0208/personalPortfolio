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
    }, 80);

    if (title.length === titleCnt) {
      clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [titleCnt]);
  return (
    <h2 className="h-44 whitespace-pre text-xl leading-relaxed text-fontColorSky">
      {tempTitle}
    </h2>
  );
};

export default TypingAnimation;
