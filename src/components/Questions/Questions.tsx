import cn from 'classnames';
import React, { useState } from 'react';
import allData from '../../../data.json';
import ArrowLine from '../../assets/icons/arrowLine.svg';
import { InfoBlock } from '../../types';
import Question from '../Question/Question';
import s from './Questions.module.scss';

interface IProps {
  questions: InfoBlock[];
  title: string;
  showButton?: boolean;
  id?: string;
}

const Questions: React.FC<IProps> = ({ questions, title, showButton = true, id = '' }) => {
  const [activeQuestion, setActiveQuestion] = useState<Record<number, boolean>>({ 0: true });
  const [showAll, setShowAll] = useState(true);

  return (
    <div className={s.root} id={id}>
      <div className="title">{title}</div>
      <div className={s.questionsBox}>
        <div className={s.questionsColumn}>
          {questions.slice(0, 6).map((el, index) => (
            <button
              type="button"
              key={el.id}
              onClick={() => setActiveQuestion((prev) => ({ ...prev, [index]: !prev[index] }))}
            >
              <Question {...el} position={index + 1} isActive={activeQuestion[index]} />
            </button>
          ))}
        </div>
        {/* <div className={s.questionsColumn}>
          {questions.slice(3, 6).map((el, index) => (
            <button
              type="button"
              key={el.id}
              onClick={() => setActiveQuestion((prev) => ({ ...prev, [index + 3]: !prev[index + 3] }))}
            >
              <Question {...el} position={index + 4} isActive={activeQuestion[index + 3]} />
            </button>
          ))}
        </div> */}
      </div>
      {questions.length > 6 && (
        <>
          <div className={cn(s.allQuestions, { [s.active]: showAll })}>
            {questions.slice(6).map((el, index) => (
              <button
                type="button"
                key={el.id}
                onClick={() => setActiveQuestion((prev) => ({ ...prev, [index + 6]: !prev[index + 6] }))}
              >
                <Question {...el} position={index + 7} isActive={activeQuestion[index + 6]} />
              </button>
            ))}
          </div>

          <button type="button" onClick={() => setShowAll(!showAll)}>
            <div className={s.readMore}>{allData.landing.questions.readAll}</div>
            <div className={cn(s.showMoreBox, { [s.active]: showAll })}>
              <ArrowLine />
            </div>
          </button>
        </>
      )}
      {showButton && (
        <a href="#activation" className={s.becomePartner}>
          {allData.landing.questions.becomeAPartner}
        </a>
      )}
    </div>
  );
};

export default Questions;
