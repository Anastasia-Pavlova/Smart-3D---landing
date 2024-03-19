/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import MobileImage from '../../assets/images/mobile-img.webp';
import AppStore from '../../assets/icons/appStore.svg';
import PlayMarket from '../../assets/icons/playMarket.svg';
import First from '../../assets/images/first.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import Second from '../../assets/images/second.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import Third from '../../assets/images/third.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import s from './BannerSlider.module.scss';

const getImagePath = (windowWidth, images, factor = 1) => {
  if (windowWidth <= 320) {
    return images[0].path;
  }
  if (windowWidth <= 640) {
    return images[1].path;
  }
  if (windowWidth <= 960) {
    return images[2].path;
  }
  if (windowWidth <= 1200) {
    return images[3].path;
  }

  if (windowWidth <= 1800) {
    return images[4].path;
  }
  return images[5].path;
};

const BannerSlider = () => {
  const [slide, setSlide] = useState(0);
  const [isInit, setIsInit] = useState(true);
  const timeoutRef: { current: ReturnType<typeof setTimeout> | null } = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      resetTimeout();
    };
  }, []);

  useEffect(() => {
    if (isInit) {
      const timeout = setTimeout(() => {
        setIsInit(false);
        setSlide(slide + 1);
      }, 5000);
      timeoutRef.current = timeout;
    } else if (slide < banners.length - 1) {
      const timeout = setTimeout(() => setSlide(slide + 1), 5000);
      timeoutRef.current = timeout;
    } else {
      const timeout = setTimeout(() => setSlide(0), 5000);
      timeoutRef.current = timeout;
    }
  }, [slide]);

  return (
    <>
      <div className={s.root}>
        {banners.map((el, index) => (
          <img
            src={getImagePath(window.innerWidth, el.imageURL.images)}
            alt="Header Banner"
            className={cn(s.image, {
              [s.initial]: isInit, // мы не хотим анимацию на первом слайде при запуске
              [s.active]: index === slide,
              [s.prevImage]: index === slide - 1 || (slide === 0 && index === banners.length - 1),
            })}
            key={el.id}
          />
        ))}
        <div className={s.info}>
          <div className={s.textContainer}>
            <div className={s.title}>ФРАНШИЗА В СМАРТФОНЕ</div>
            <div className={s.proposition}>
              получите лицензию и зарабатывайте в приложении на 3D ремонте от 10 000 $
            </div>
          </div>
          <div className={s.imageContainer}>
            <img src={MobileImage.src} alt="" />
            <div className={s.linksTitle}>Приложение для партнёров</div>
            <div className={s.appLinks}>
              <a href="https://apps.apple.com/app/smart3d-company/id1611212233" className={s.appLink}>
                <AppStore className={s.icon} /> <span>APP STORE</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.constructor.first" className={s.appLink}>
                <PlayMarket className={s.icon} /> <span>GOOGLE PLAY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={s.imageContainerMobile}>
        <div className={cn('title', s.appTitle)}>Приложение для партнёров</div>
        <img src={MobileImage.src} alt="" />
        <div className={s.appLinks}>
          <a href="https://apps.apple.com/app/smart3d-company/id1611212233" className={s.appLink}>
            <AppStore className={s.icon} /> <span>APP STORE</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.constructor.first" className={s.appLink}>
            <PlayMarket className={s.icon} /> <span>GOOGLE PLAY</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;

const banners = [
  {
    imageURL: First,
    id: 0,
  },
  {
    imageURL: Second,
    id: 1,
  },
  {
    imageURL: Third,
    id: 2,
  },
];
