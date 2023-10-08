import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ModeSwitch from './components/ModeSwitch';

const inter = Inter({ subsets: ['latin'] });

const introTxt = "'그 곳에 산이 있으니까'\n프론트 개발자 이현수입니다.";

export default function Home() {
  return (
    <section className="relative top-[-32px] flex h-[360px] w-full flex-col items-center justify-between lg:w-[1024px]">
      <Profile title={introTxt} />
      <Nav />
    </section>
  );
}
