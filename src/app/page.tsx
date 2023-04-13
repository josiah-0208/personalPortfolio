import { Inter } from 'next/font/google'
import Top from './layouts/Top'
import Profile from './components/Profile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-pink-200'>
      <Profile/>
      <Top/>
    </div>
  )
}
