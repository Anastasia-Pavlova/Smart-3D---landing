import React from 'react';
import allData from '../../../data.json';
// eslint-disable-next-line import/no-unresolved
import Third from '../../assets/images/rightsDefense.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import s from './RightsDefense.module.scss';

const RightsDefense = () => {
  return (
    <div className={s.root} id="law">
      <div className={s.title}>Защита авторских прав</div>
      <div className={s.imageWrapper}>
        <img srcSet={Third.srcSet} alt="" />
      </div>
      <div className={s.textBlock}>
        <div className={s.title}>{allData.landing.rights.title}</div>
        <div className={s.description}>{allData.landing.rights.description}</div>
      </div>
    </div>
  );
};

export default RightsDefense;
