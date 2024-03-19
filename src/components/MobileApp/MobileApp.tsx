import cn from 'classnames';
import React from 'react';
import allData from '../../../data.json';
import AppStore from '../../assets/icons/appStore.svg';
import PlayMarket from '../../assets/icons/playMarket.svg';
import MobileLeft from '../../assets/images/mobile-img-left.webp';
import s from './MobileApp.module.scss';

const MobileApp = () => {
  return (
    <div className={s.root} id="app">
      <div className={cn('title', s.title)}>{allData.landing.mobile.upperTitle}</div>
      <div className={s.wrapper}>
        <div className={s.imageWrapper}>
          <img src={MobileLeft} alt="" className={s.image} />
        </div>
        <div className={s.textBlock}>
          <div className={s.title}>{allData.landing.mobile.title}</div>
          <div className={s.description}>{allData.landing.mobile.description}</div>
          <div className={s.appLinks}>
            <a href="https://apps.apple.com/app/smart3d-company/id1611212233" className={s.appLink}>
              <AppStore />
              APP STORE
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.constructor.first" className={s.appLink}>
              <PlayMarket />
              PLAY STORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
