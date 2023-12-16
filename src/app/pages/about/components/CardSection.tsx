import { hoverScale } from '@/app/modules/style/events';
import React from 'react';

type Props = {};

const CardSection = (props: Props) => {
  return (
    <div
      className={
        'min-w-[300px] rounded-2xl bg-[rgb(239,239,239)] shadow-md' + hoverScale
      }
    >
      CardSection
    </div>
  );
};

export default CardSection;
