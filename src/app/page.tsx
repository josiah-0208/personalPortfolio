import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ModeSwitch from './components/ModeSwitch';

const inter = Inter({ subsets: ['latin'] });

const introTxt = "'그 곳에 산이 있으니까'\n심미적 개발자 이현수입니다.";

export default function Home() {
  return (
    <section className="relative top-[-32px] flex h-[272px] w-[56%] flex-col justify-between">
      <Profile title={introTxt} />
      <Nav />
    </section>
  );
}
