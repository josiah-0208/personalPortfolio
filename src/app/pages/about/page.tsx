import React from 'react';
import { hoverScale } from '../../modules/style/events';
import CardSection from './components/CardSection';
import LinkIcon, { IconProps } from './components/LinkIcon';

export default function About({ data }: any) {
  const resLinkIconData = fetch('../../data/mockData.json');
  const introductionText = `안녕하세요.
  점진적 성장을 지향하는 프론트엔드 개발자 이현수입니다.
  다양한 지역과 문화를 경험하는 것을 좋아합니다.`;
  console.log(resLinkIconData);
  // const
  return (
    <section className="h-full dark:text-white">
      <div className="flex flex-col gap-8">
        <div className="whitespace-pre-line text-[24px]">
          {introductionText}
        </div>
        <CardSection />
        {data}
      </div>
    </section>
  );
}

// export async function getStaticProps() {
//   const resLinkIconData = await fetch('./data/mockData.json');
//   console.log(resLinkIconData + '1');
//   return {
//     props: {
//       resLinkIconData,
//     },
//   };
// }
