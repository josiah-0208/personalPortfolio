import React from 'react';
import Tab from './Tab';

type Props = {};

export default function Nav({}: Props) {
  // 상단 탭 이름 배열을 미리 정의해둠.
  const categories: string[] = ['Introduction', 'Careers', 'Portfolio'];

  return (
    <nav>
      <ul className="flex justify-around">
        {/* 탭 이름 배열을 map으로 나열 */}
        {categories.map((category, index) => {
          return <Tab key={'' + category + index} category={category} />;
        })}
      </ul>
    </nav>
  );
}
