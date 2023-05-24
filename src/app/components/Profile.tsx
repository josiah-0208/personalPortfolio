import Image from 'next/image'
import React from 'react'
import TypingAnimation from './TypingAnimation'

type Props = {}

const Profile:React.FC = (props: Props) => {

  // 소개말을 텍스트로 정해놓고, typingAnimation에 props로 건네준다.
  const introTxt = "안녕하세요. 이 페이지는 Next.Js TypeScript TailwindCss 로 개발되고 있습니다."

  return (
    <div className='relative top-1/4 flex bg-green-400'>
      {/* next에서 제공하는 이미지 컴포넌트 */}
      <Image className='rounded-full shadow-xl' src='/images/myProfile.jpg' alt='' width={160} height={160}></Image>
      <TypingAnimation txt={introTxt}/>
    </div>
  )
}

export default Profile