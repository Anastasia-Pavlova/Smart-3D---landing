import cn from 'classnames';
import React, { useState } from 'react';
import allData from '../../../data.json';
import MADS from '../../assets/icons/mads.svg';
import Partnership from '../../assets/icons/partnership.svg';
import Arrow from '../../assets/icons/rightTopArrow.svg';
import Sell from '../../assets/icons/sell.svg';
import Video from '../../assets/icons/video.svg';
import DoorsMADS from '../../assets/images/doorsMADS.png';
import DoorsSell from '../../assets/images/doorsSell.png';
import PanelMADS from '../../assets/images/panelMADS.png';
import PanelSell from '../../assets/images/panelSell.png';
import RichBoy from '../../assets/images/richBoy.webp';
import s from './PartnersIncome.module.scss';

const PartnersIncome = () => {
  const [activeWay, setActiveWay] = useState(0);
  const [selected, setSelected] = useState('panels');
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={s.root} id="ways">
      <div className={s.leftBlock}>
        {ways.map((el, index) => (
          <div className={s.wayWrapper} key={el.id}>
            <button
              type="button"
              className={cn(s.way, { [s.active]: activeWay === index })}
              onClick={() => setActiveWay(index)}
              style={{ backgroundColor: el.backgroundColor }}
            >
              <div className={s.wayNumber}>
                <span>{index + 1}</span>
                <span>способ</span>
              </div>
              <div className={s.wayTitle}>{el.title}</div>
              <div className={s.iconWrapper}>{el.icon}</div>
            </button>
            {activeWay === index && (
              <div className={s.sideLinks}>
                <button type="button" onClick={() => setShowMore(true)}>
                  УЗНАТЬ
                  <br />
                  БОЛЬШЕ
                </button>
                <a href={el.links.video}>
                  СМОТРЕТЬ
                  <br />
                  ВИДЕО
                </a>
              </div>
            )}
          </div>
        ))}
        <div className={s.switchers}>
          <button
            type="button"
            className={cn(s.switcher, { [s.active]: selected === 'panels' })}
            onClick={() => setSelected('panels')}
          >
            3D ПАНЕЛИ
          </button>
          <div className={s.divider} />
          <button
            type="button"
            className={cn(s.switcher, { [s.active]: selected === 'doors' })}
            onClick={() => setSelected('doors')}
          >
            3D ДВЕРИ
          </button>
        </div>
      </div>
      <div className={s.rightBlock}>
        {activeWay !== 3 && (
          <>
            <div className={s.rightTitle}>{ways[activeWay].diagramTitle[selected]}</div>
            <div className={s.diagramWrapper}>
              <img src={ways[activeWay].diagram[selected]} alt="" />
            </div>
            <div className={s.bottomLine}>
              <div className={s.incomeCalculation}>
                <div className={s.partnerReceive}>
                  Получает партнёр за <b>3D панели</b>
                </div>
                <div className={s.calculationsText}>
                  <b>{ways[activeWay].pannelsPrice}</b>$ x <b>600</b>м² = <b>{ways[activeWay].pannelsPrice * 600}</b> $
                  <Arrow />
                </div>
                <div className={s.partnerReceive}>
                  Получает партнёр за <b>3D двери</b>
                </div>
                <div className={s.calculationsText}>
                  <b>{ways[activeWay].doorsPrice}</b>$ x <b>30</b>шт = <b>{ways[activeWay].doorsPrice * 30}</b>$
                  <Arrow />
                </div>
                <div className={s.partnerReceive}>
                  Общая прибыль партнера с <b>1 лицензии</b>
                </div>
                <div className={s.totalIncome}>
                  <b>{ways[activeWay].doorsPrice * 30}</b>$ + <b>{ways[activeWay].pannelsPrice * 600}</b>$ ={' '}
                  <b>{ways[activeWay].pannelsPrice * 600 + ways[activeWay].doorsPrice * 30}</b>$
                  <Arrow />
                </div>
              </div>
              <img src={RichBoy} alt="" className={s.richBoyImage} loading="lazy" />
            </div>
          </>
        )}
        {activeWay === 3 && (
          <>
            <div className={cn(s.rightTitle, s.videChannel)}>Ожидайте весной 2024 года</div>
            <img src={RichBoy} alt="" className={cn(s.richBoyImage, s.videChannel)} loading="lazy" />
          </>
        )}
      </div>
      <div className={s.knowMoreBlock} style={{ position: 'absolute', top: 0, right: showMore ? 0 : '-100%' }}>
        <button type="button" onClick={() => setShowMore(false)} className={s.arrowBackKnow}>
          <Arrow />
        </button>
        <div className={s.imageWrapperKnow}>
          <img src={ways[activeWay].knowMoreImage?.URL} alt="" />
        </div>
        <div className={s.textBlockKnow}>
          <div className={s.titleKnow}>{ways[activeWay].knowMoreTitle}</div>
          <div className={s.descriptionKnow}>{ways[activeWay].knowMoreDescription}</div>
        </div>
      </div>
    </div>
  );
};

const ways = [
  {
    title: 'Продай\nсам',
    icon: <Sell />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    knowMoreTitle: allData.landing.knowMore.first.title,
    knowMoreDescription: allData.landing.knowMore.first.description,
    knowMoreImage: allData.landing.knowMore.first.image,
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 ДВЕРЬ',
    },
    diagram: {
      panels: PanelSell,
      doors: DoorsSell,
    },
    backgroundColor: '#0d7af3',
    id: 'way1SellByYourself',
    pannelsPrice: 5,
    doorsPrice: 20,
  },
  {
    title: 'МАДС',
    icon: <MADS />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    knowMoreTitle: allData.landing.knowMore.second.title,
    knowMoreDescription: allData.landing.knowMore.second.description,
    knowMoreImage: allData.landing.knowMore.second.image,
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 ДВЕРЬ',
    },
    diagram: {
      panels: PanelMADS,
      doors: DoorsMADS,
    },
    backgroundColor: '#8fd826',
    id: 'way2MADS',
    pannelsPrice: 3,
    doorsPrice: 5,
  },
  {
    title: 'Партнёрская\nпрограмма',
    icon: <Partnership />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    knowMoreTitle: allData.landing.knowMore.third.title,
    knowMoreDescription: allData.landing.knowMore.third.description,
    knowMoreImage: allData.landing.knowMore.third.image,
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 ДВЕРЬ',
    },
    diagram: {
      panels: PanelSell,
      doors: DoorsSell,
    },
    backgroundColor: '#e6621a',
    id: 'way3PartnerProgram',
    pannelsPrice: 1,
    doorsPrice: 1,
  },
  {
    title: 'Видеоканал',
    icon: <Video />,
    links: {
      knowMore: 'https://google.com',
      video: '#video-program',
    },
    knowMoreTitle: allData.landing.knowMore.fourth.title,
    knowMoreDescription: allData.landing.knowMore.fourth.description,
    knowMoreImage: allData.landing.knowMore.fourth.image,
    diagramTitle: {
      panels: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 м² ПАНЕЛИ',
      doors: 'РАСЧЁТ ПРИБЫЛИ ПАРТНЁРА ЗА 1 ДВЕРЬ',
    },
    backgroundColor: '#d926a4',
    id: 'way4VideoChannel',
  },
];

export default PartnersIncome;
