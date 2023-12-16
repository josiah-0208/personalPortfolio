import Image from 'next/image';
import React from 'react';
import { hoverScale } from '../../modules/style/events';
import CardSection from './components/CardSection';
import LinkIcon from './components/LinkIcon';

type Props = {};

export default function About({}: Props) {
  // const
  return (
    <section className="h-full dark:text-white">
      <div className="flex flex-col gap-8">
        <div className="text-[24px]">
          안녕하세요.
          <br />
          점진적 성장을 지향하는 프론트엔드 개발자 이현수입니다.
          <br />
          다양한 지역과 문화를 경험하는 것을 좋아합니다.
        </div>
        <CardSection />
        <LinkIcon
          src={'/static/images/icon_google.svg'}
          alt="google icon"
          width={32}
          height={32}
          content="lhyunsoo0208@gmail.com"
        />
        <LinkIcon
          src={'/static/images/icon_naver.svg'}
          alt="naver icon"
          width={32}
          height={32}
          content="beth_shan@naver.com"
        />
        <Image
          src={'/static/images/icon_github.svg'}
          alt="github icon"
          width={32}
          height={32}
        />
        <Image
          src={'/static/images/icon_linkedin.svg'}
          alt="linkedin icon"
          width={32}
          height={32}
        />
        <Image
          src={'/static/images/icon_tistory.svg'}
          alt="tistory icon"
          width={32}
          height={32}
        />
      </div>
    </section>
  );
}
