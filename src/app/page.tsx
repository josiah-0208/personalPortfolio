import { Inter } from 'next/font/google'
import Top from './layouts/Top'
import Profile from './components/Profile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header>
        <Profile/>
        <Top/>
      </header>
      <body>

      </body>
    </div>
  )
}
