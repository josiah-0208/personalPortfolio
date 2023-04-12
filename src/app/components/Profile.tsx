import Image from 'next/image'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='flex bg-green-400'>
        {/* next에서 제공하는 이미지 컴포넌트 */}
        <Image className='rounded-full shadow-xl' src='/images/myProfile.jpg' alt='' width={160} height={160}></Image>
        <div>
            안녕하세요. 이 페이지는 Next.Js TypeScript TailwindCss 로 개발되고 있습니다.
        </div>
    </div>
  )
}

export default Profile