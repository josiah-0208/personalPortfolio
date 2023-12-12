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

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  function getCurrentPageStyle(path: string): string {
    return path.toLowerCase() === currentPathname.split('/')[2]
      ? 'text-fontColorSky'
      : 'dark:text-white';
  }

  if (currentPathname.length === 1) {
    return (
      <header className="flex h-16 items-center">
        <ModeSwitch></ModeSwitch>
      </header>
    );
  } else {
    return (
      <header className="text-blue flex h-16 items-center">
        <nav>
          <ul className="flex gap-8">
            {navList.map((item) => (
              <li className={getCurrentPageStyle(item)}>
                <Link
                  href={`/${
                    item === 'HOME' ? '/' : 'pages/' + item.toLowerCase()
                  }`}
                  key={item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ModeSwitch></ModeSwitch>
      </header>
    );
  }
}

export default Header;
