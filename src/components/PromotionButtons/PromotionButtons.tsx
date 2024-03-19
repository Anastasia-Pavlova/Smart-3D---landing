import cn from 'classnames';
import React from 'react';
import allData from '../../../data.json';
import s from './PromotionButtons.module.scss';

export const PromotionButton = () => {
  return (
    <button type="submit" className={s.submitButton}>
      <a href="#vip">Стать партнёром</a>
    </button>
  );
};

export const VipButton = () => {
  return (
    <div className={s.root}>
      <div className={s.oneTime}>{allData.landing.vip.button}</div>
      <button type="submit" className={cn(s.submitButton, s.smallText)}>
        <a href="https://t.me/smart3d_admin">
          <div>Получите договор здесь</div>
          <div className="mobile">&nbsp;</div>
          <div />
        </a>
      </button>
    </div>
  );
};
