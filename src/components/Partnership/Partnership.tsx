import cn from 'classnames';
import React, { useState } from 'react';
import allData from '../../../data.json';
import AppStore from '../../assets/icons/appStore.svg';
import Cube from '../../assets/icons/cube.svg';
import Deals from '../../assets/icons/deals.svg';
import Finance from '../../assets/icons/finance.svg';
import PC from '../../assets/icons/pc.svg';
import PlayMarket from '../../assets/icons/playMarket.svg';
import Team from '../../assets/icons/team.svg';
import ThinArrow from '../../assets/icons/thinArrow.svg';
import Wallet from '../../assets/icons/wallet.svg';
import MobileLeft from '../../assets/images/mobile-img-left.webp';
import DesignPhone from '../../assets/images/screen-01.webp';
import MarketPhone from '../../assets/images/screen-02.webp';
import WalletPhone from '../../assets/images/screen-03.webp';
import DealsPhone from '../../assets/images/screen-04.webp';
import FinancePhone from '../../assets/images/screen-05.webp';
import TeamPhone from '../../assets/images/screen-06.webp';
import s from './Partnership.module.scss';

const Partnership = () => {
  const [sliderTab, setSliderTab] = useState(0);

  const handleArrowClick = (direction: number) => {
    if (direction === 1) {
      if (sliderTab >= galleryData.length - 1) {
        setSliderTab(0);
        return;
      }
    } else if (sliderTab <= 0) {
      setSliderTab(galleryData.length - 1);
      return;
    }

    setSliderTab((prev) => prev + direction);
  };
  return (
    <div className={s.root} id="company">
      <div className="title">{allData.landing.partnership.title}</div>
      <div className="descriptionTitle">{allData.landing.partnership.description}</div>
      <div className={s.sliderWrapper}>
        <div className={s.switchersBlock}>
          {galleryData.slice(0, 3).map((el, index) => (
            <button
              type="button"
              className={cn(s.switcher, { [s.active]: sliderTab === index })}
              onClick={() => setSliderTab(index)}
              key={`${el.title}$${el.id}button`}
            >
              {el.icon} {el.title}
            </button>
          ))}
        </div>
        <div className={s.gallery}>
          <div className={s.galleryItem}>
            <img src={MobileLeft} alt="" loading="lazy" />
            <img src={galleryData[sliderTab].image} alt="" loading="lazy" />
          </div>
        </div>
        <div className={s.switchersBlock}>
          {galleryData.slice(3, 6).map((el, index) => (
            <button
              type="button"
              className={cn(s.switcher, { [s.active]: sliderTab === index + 3 })}
              onClick={() => setSliderTab(index + 3)}
              key={`${el.title}$${el.id}button`}
            >
              {el.icon} {el.title}
            </button>
          ))}
        </div>
        <button className={cn(s.arrow, s.left)} type="button" onClick={() => handleArrowClick(-1)}>
          <ThinArrow />
        </button>
        <button className={cn(s.arrow, s.right)} type="button" onClick={() => handleArrowClick(1)}>
          <ThinArrow />
        </button>
      </div>
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
  );
};

const galleryData = [
  {
    title: allData.landing.partnership.wallet,
    icon: <Wallet />,
    image: WalletPhone,
    id: 'galleryPartner2',
  },
  {
    title: allData.landing.partnership.deals,
    icon: <Deals />,
    image: DealsPhone,
    id: 'galleryPartner3',
  },
  {
    title: allData.landing.partnership.design,
    icon: <Cube />,
    image: DesignPhone,
    id: 'galleryPartner6',
  },
  {
    title: allData.landing.partnership.finance,
    icon: <Finance />,
    image: FinancePhone,
    id: 'galleryPartner4',
  },
  {
    title: allData.landing.partnership.market,
    icon: <PC />,
    image: MarketPhone,
    id: 'galleryPartner1',
  },
  {
    title: allData.landing.partnership.team,
    icon: <Team />,
    image: TeamPhone,
    id: 'galleryPartner5',
  },
];

export default Partnership;
