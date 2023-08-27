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
    <div className="flex items-center gap-8">
      {/* next에서 제공하는 이미지 컴포넌트 */}
      <Image
        className="rounded-full shadow-2xl"
        src={profileImg}
        alt=""
        width={192}
        height={192}
      ></Image>
      <TypingAnimation title={title} />
    </div>
  );
};

export default Profile;
