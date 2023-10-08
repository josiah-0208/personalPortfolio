import Image from 'next/image';
import React from 'react';
import TypingAnimation from './TypingAnimation';
import profileImg from 'public/static/images/myProfile.jpg';

type ProfileProps = {
  title: string;
};

const Profile = ({ title }: ProfileProps) => {
  // 소개말을 텍스트로 정해놓고, typingAnimation에 props로 건네준다.

  return (
    <div className="flex w-full flex-col items-center gap-12 lg:flex-row">
      {/* next에서 제공하는 이미지 컴포넌트 */}
      <Image
        className="rounded-full shadow-2xl"
        src={profileImg}
        alt="profileImage"
        width={232}
        height={232}
      ></Image>
      <TypingAnimation title={title} />
    </div>
  );
};

export default Profile;
