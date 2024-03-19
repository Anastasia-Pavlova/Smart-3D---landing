import React from 'react';
import { ImageResponse } from '../../types';
import s from './Promotion.module.scss';

type Props = {
  title: string;
  description: string;
  image: ImageResponse;
  actionButton: React.ReactChild;
  id?: string;
};

const Promotion: React.FC<Props> = ({ title, description, image, actionButton, id = null }) => {
  return (
    <div className={s.root} id={id}>
      <div className={s.leftBlock}>
        <div
          dangerouslySetInnerHTML={{
            __html: title.replaceAll('&lt;', '<').replaceAll('&gt;', '>'),
          }}
        />
      </div>
      <div className={s.middleBlock}>
        <div className={s.description}>{description}</div>
      </div>
      <div className={s.rightBlock}>
        <img src={image?.URL} alt="" />
        {actionButton}
      </div>
    </div>
  );
};

export default Promotion;
