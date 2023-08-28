import React from 'react';
import Link from 'next/link';

type TabProps = {
  category: string;
};

const Tab = ({ category }: TabProps) => {
  return (
    <li className="text-2xl font-normal text-fontColorSilver shadow-black drop-shadow-xl hover:text-fontColorSky dark:text-fontColor dark:hover:text-fontColorOrange">
      <Link href={'/' + category}>{category}</Link>
    </li>
  );
};

export default Tab;
