'use client';
import React, { useEffect, useState } from 'react';
import ModeSwitch from './ModeSwitch';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState<string>('/');

  const navList: string[] = ['HOME', 'ABOUT', 'EXPERIENCE', 'FLAGS'];
  // use client를 써서
  // home about experience flags 다크모드 영어
  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);
  if (currentPathname.length === 1) {
    return (
      <header className="flex h-16 items-center">
        <ModeSwitch></ModeSwitch>
      </header>
    );
  } else {
    return (
      <header className="flex h-16 items-center">
        <nav className="flex gap-8">
          {navList.map((item) => (
            <Link
              href={`/${item === 'HOME' ? '/' : item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <ModeSwitch></ModeSwitch>
      </header>
    );
  }
}

export default Header;
