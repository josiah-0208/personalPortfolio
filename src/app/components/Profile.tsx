import Image from 'next/image';
import React, { FC } from 'react';
import TypingAnimation from './TypingAnimation';
import profileImg from 'public/static/images/myProfile.jpg';
import ModeSwitch from './ModeSwitch';

type ProfileProps = {
  title: string;
};

const Profile = ({ title }: ProfileProps) => {
  // 소개말을 텍스트로 정해놓고, typingAnimation에 props로 건네준다.

  return (
    <div className="relative top-1/4 flex">
      {/* next에서 제공하는 이미지 컴포넌트 */}
      <Image
        className="rounded-full shadow-2xl"
        src={profileImg}
        alt=""
        width={160}
        height={160}
      ></Image>
      <TypingAnimation title={title} />
    </div>
  );
};

export default Profile;
