import React from 'react';
import Link from 'next/link';

type TabProps = {
  category: string;
};

const Tab = ({ category }: TabProps) => {
  return (
    <li className="text-[20px] font-semibold text-fontColorSilver drop-shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:text-fontColorSky dark:text-fontColor dark:hover:text-fontColorOrange lg:text-[28px]">
      <Link href={'/' + category.toLowerCase()}>{category}</Link>
    </li>
  );
};

export default Tab;
