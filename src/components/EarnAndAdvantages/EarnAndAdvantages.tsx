/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-unresolved */
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import allData from '../../../data.json';
import s from './EarnAndAdvantages.module.scss';

interface IProps {
  type: 'earn' | 'advantages';
  data: {
    title: string;
    description: string;
    image: string;
  }[];

  title: string;
  description: string;
  id?: string;
  images: { srcSet: string }[];
}

const EarnAndAdvantages: React.FC<IProps> = ({ type, data, title, description, images, id = '' }) => {
  const [isInit, setIsInit] = useState(true);
  const [selected, setSelected] = useState(0);
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
        setSelected(selected + 1);
      }, 5000);
      timeoutRef.current = timeout;
    } else if (selected < images.length - 1) {
      const timeout = setTimeout(() => setSelected(selected + 1), 5000);
      timeoutRef.current = timeout;
    } else {
      const timeout = setTimeout(() => setSelected(0), 5000);
      timeoutRef.current = timeout;
    }
  }, [selected]);

  return (
    <div className={s.root} id={id}>
      <div className="title">{title}</div>
      <div className="descriptionTitle">{description}</div>
      <div className={s.infoBlock}>
        <div className={s.ways}>
          <button className={cn(s.way, { [s.active]: selected === 0 })} type="button" onClick={() => setSelected(0)}>
            <div className={s.wayTitle}>
              {allData.landing[type === 'advantages' ? 'advantages' : 'earn'].first.title}
            </div>
            <div className={s.wayDescription}>
              {allData.landing[type === 'advantages' ? 'advantages' : 'earn'].first.description}
            </div>
          </button>

          <button className={cn(s.way, { [s.active]: selected === 1 })} type="button" onClick={() => setSelected(1)}>
            <div className={s.wayTitle}>
              {allData.landing[type === 'advantages' ? 'advantages' : 'earn'].second.title}
            </div>
            <div className={s.wayDescription}>
              {allData.landing[type === 'advantages' ? 'advantages' : 'earn'].second.description}
            </div>
          </button>

          <button className={cn(s.way, { [s.active]: selected === 2 })} type="button" onClick={() => setSelected(2)}>
            <div className={s.wayTitle}>
              {allData.landing[type === 'advantages' ? 'advantages' : 'earn'].third.title}
            </div>
            <div className={s.wayDescription}>
              {allData.landing[type === 'advantages' ? 'advantages' : 'earn'].third.description}
            </div>
          </button>
        </div>
        {/* <img srcSet={images[selected].srcSet} alt="" /> */}

        <div className={s.images}>
          {images.map((el, index) => (
            <div
              className={cn(s.imageWrapper, {
                [s.initial]: isInit, // мы не хотим анимацию на первом слайде при запуске
                [s.active]: index === selected,
                [s.prevImage]: index === selected - 1 || (selected === 0 && index === images.length - 1),
              })}
            >
              <img srcSet={el.srcSet} alt="Header Banner" className={cn(s.image)} key={el.srcSet[0]} />
              <a href="#questions" className={s.linkQuestions}>
                {allData.landing.questions.knowMoreIn}
              </a>
              <div className={s.controls}>
                <button
                  type="button"
                  onClick={() => setSelected(0)}
                  className={cn(s.control, { [s.active]: selected === 0 })}
                />
                <button
                  type="button"
                  onClick={() => setSelected(1)}
                  className={cn(s.control, { [s.active]: selected === 1 })}
                />
                <button
                  type="button"
                  onClick={() => setSelected(2)}
                  className={cn(s.control, { [s.active]: selected === 2 })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarnAndAdvantages;
