import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ModeSwitch from './components/ModeSwitch';

const inter = Inter({ subsets: ['latin'] });

const introTxt = '"그 곳에 산이 있으니까"\n심미적 개발자 이현수입니다.';
// '안녕하세요. 이 페이지는 Next.Js TypeScript TailwindCss 로 개발되고 있습니다.';

export default function Home() {
  return (
    <section className="flex-col justify-center">
      <Profile title={introTxt} />
      <Nav />
    </section>
  );
}
