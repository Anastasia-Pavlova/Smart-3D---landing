import React from 'react';
import allData from '../../../data.json';
import DoorsStore from '../../assets/images/doorsStore.png';
import PanelsStore from '../../assets/images/panelsStore.webp';
import s from './PersonalStore.module.scss';

const PersonalStore = () => {
  return (
    <div className={s.root}>
      <div className={s.title}>{allData.landing.partnerHave.storeTitle}</div>
      <div className={s.firstLine}>
        <div className={s.centerImage}>
          <img src={allData.landing.partnerHave.storeImage?.URL} alt="" loading="lazy" />
        </div>
        <div className={s.rightBlock}>
          <div className={s.blocksWrapper}>
            <div className={s.block}>
              <div className={s.imageWrapper}>
                <img src={PanelsStore} alt="" loading="lazy" />
              </div>
              <div className={s.blueText}>300 м²</div>
              <div className={s.blockDescription}>3D панелей</div>
            </div>
            <div className={s.block}>
              <div className={s.imageWrapper}>
                <img src={DoorsStore} alt="" loading="lazy" />
              </div>
              <div className={s.blueText}>30 шт</div>
              <div className={s.blockDescription}>3D дверей</div>
            </div>
          </div>

          <div className={s.secondLine}>{allData.landing.partnerHave.storeDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStore;
