import { Inter } from 'next/font/google'
import Top from './layouts/Top'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header>
        <Top/>
      </header>
    </div>
  )
}
