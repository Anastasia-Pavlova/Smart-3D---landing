import React from 'react';
import Globe from '../../assets/images/globe.webp';
import s from './Add.module.scss';

type Props = {
  title: string;
  description: string;
};

const Add: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={s.root} id="add">
      <div className="title">{title}</div>
      <div className={s.description}>{description}</div>

      <img src={Globe} alt="" />
    </div>
  );
};

export default Add;
