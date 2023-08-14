import React from 'react';
import Link from 'next/link';

type TabProps = {
  category: string;
};

const Tab = ({ category }: TabProps) => {
  return (
    <li className="bg-sky-500 shadow-lg transition duration-300 hover:text-sky-500">
      <Link href={'/' + category}>{category}</Link>
    </li>
  );
};

export default Tab;
