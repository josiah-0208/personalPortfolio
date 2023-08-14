'use client';
import React, { useEffect, useState } from 'react';

type TypingAnimationProps = {
  title: string;
};

const TypingAnimation = ({ title }: TypingAnimationProps) => {
  return <div className="whitespace-pre dark:text-white">{title}</div>;
};

export default TypingAnimation;
