'use client';
import React, { useEffect, useState } from 'react';
import ModeSwitch from './ModeSwitch';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {};

type currentPage {
  [true]
}

function Header({}: Props) {
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState<string>('/');
  const currentPage = {
    true: 
  }

  const navList: string[] = ['HOME', 'ABOUT', 'EXPERIENCE', 'FLAGS'];
  // use client를 써서
  // home about experience flags 다크모드 영어
  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  if (currentPathname.length === 1) {
    return (
      <header className="flex items-center h-16">
        <ModeSwitch></ModeSwitch>
      </header>
    );
  } else {
    return (
      <header className="flex items-center h-16 text-blue">
        <nav>
          <ul className="flex gap-8">
            {navList.map((item) => (
              <li className="{{ currentPathname ? 'text-red-500' : 'text-blue-500'  }}">
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
