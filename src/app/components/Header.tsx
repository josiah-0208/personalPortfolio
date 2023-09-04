'use client';
import React, { useEffect, useState } from 'react';
import ModeSwitch from './ModeSwitch';
import { usePathname } from 'next/navigation';

type Props = {};

function Header({}: Props) {
  const pathname = usePathname();

  const [currentPathname, setCurrentPathname] = useState<string>('/');
  // use client를 써서
  // home about experience flags 다크모드 영어
  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);
  if (currentPathname.length === 1) {
    return (
      <header className="h-16 ">
        <ModeSwitch></ModeSwitch>
      </header>
    );
  } else {
    return (
      <header className="h-16 ">
        home, about, experience, flags
        <ModeSwitch></ModeSwitch>
      </header>
    );
  }
}

export default Header;
