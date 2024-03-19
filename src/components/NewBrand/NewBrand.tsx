import React from 'react';
import allData from '../../../data.json';
import ColorPanels from '../../assets/icons/colorPanels.svg';
import ColorStar from '../../assets/icons/colorStar.svg';
import DoorsColor from '../../assets/icons/doorsColor.svg';
import MADS from '../../assets/icons/mads.svg';
import Partnership from '../../assets/icons/partnership.svg';
import Sell from '../../assets/icons/sell.svg';
import VideoComponent from '../VideoComponent';
import DemoItem from './DemoItem';
import s from './NewBrand.module.scss';

const NewBrand = () => {
  return (
    <div className={s.root}>
      <div className="title">{allData.landing.newBrand.title}</div>
      <div className="descriptionTitle">
        {allData.landing.newBrand.description}{' '}
        <a href={allData.landing.newBrand.siteLink.url as string} target="_blank" rel="noreferrer">
          {allData.landing.newBrand.siteLink.title}
        </a>
      </div>

      <div className={s.infoBlock}>
        <div className={s.firstDemo}>
          <div className={s.items}>
            {creations3D.map((el) => (
              <DemoItem title={el.title} icon={el.image} key={el.id} />
            ))}
          </div>
          <div className={s.titleDemo}>{allData.landing.newBrand.renovation}</div>
        </div>
        <div className={s.secondDemo}>
          <div className={s.titleDemo}>{allData.landing.newBrand.marketing}</div>
          <div className={s.items}>
            {creationsMarketing.map((el) => (
              <DemoItem title={el.title} icon={el.image} key={el.id} />
            ))}
          </div>
        </div>

        <div className={s.rootAdd}>
          <div className={s.imageWrapperAdd}>
            <img src={allData.landing.newBrandInside.image.URL} alt="" />
          </div>
          <div className={s.textBlockAdd}>
            <div className={s.titleAdd}>{allData.landing.newBrandInside.subTitle}</div>
            <div className={s.descriptionAdd}>{allData.landing.newBrandInside.description}</div>
          </div>
        </div>

        <div className={s.video}>
          <div className="title">{allData.landing.videoProd.title}</div>
          <VideoComponent id="0TC9SYu8uUw" />
        </div>
      </div>
    </div>
  );
};

const creations3D = [
  { title: allData.landing.newBrand.doors, image: <DoorsColor />, id: 'creation1' },
  { title: allData.landing.newBrand.panels, image: <ColorPanels />, id: 'creation2' },
  { title: allData.landing.newBrand.innovations, image: <ColorStar />, id: 'creation3' },
];
const creationsMarketing = [
  { title: allData.landing.newBrand.sell, image: <Sell />, id: 'creation4' },
  { title: allData.landing.newBrand.mads, image: <MADS />, id: 'creation5' },
  { title: allData.landing.newBrand.partnership, image: <Partnership />, id: 'creation6' },
];

export default NewBrand;
