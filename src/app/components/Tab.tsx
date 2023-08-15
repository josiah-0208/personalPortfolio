import React from 'react';
import Link from 'next/link';

type TabProps = {
  category: string;
};

const Tab = ({ category }: TabProps) => {
  return (
    <li className="text-fontColorSilver shadow-lg hover:text-fontColorSky dark:text-fontColor dark:hover:text-fontColorOrange">
      <Link href={'/' + category}>{category}</Link>
    </li>
  );
};

export default Tab;
