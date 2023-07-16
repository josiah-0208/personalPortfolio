import { Inter } from 'next/font/google'
import Top from './layout/Top'
import Profile from './components/Profile'

const inter = Inter({ subsets: ['latin'] })

const introTxt = "안녕하세요. 이 페이지는 Next.Js TypeScript TailwindCss 로 개발되고 있습니다."

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-pink-200'>
      <Profile title={introTxt}/>
      <Top/>
    </div>
  )
}
