import { useEffect, useState } from 'react';
import data from '../../data.json';
import { ContextData, InfoBlock } from '../types';

export const useGetAllData: () => ContextData = () => {
  const [questionsData, setQuestionsData] = useState<InfoBlock[]>([]);

  const explanationData = [
    {
      title: data.landing.appFeatures.first.title,
      description: data.landing.appFeatures.first.description,
      id: 'question1',
    },
    {
      title: data.landing.appFeatures.second.title,
      description: data.landing.appFeatures.second.description,
      id: 'question2',
    },
    {
      title: data.landing.appFeatures.third.title,
      description: data.landing.appFeatures.third.description,
      id: 'question3',
    },
    {
      title: data.landing.appFeatures.fourth.title,
      description: data.landing.appFeatures.fourth.description,
      id: 'question4',
    },
    {
      title: data.landing.appFeatures.fifth.title,
      description: data.landing.appFeatures.fifth.description,
      id: 'question5',
    },
    {
      title: data.landing.appFeatures.sixth.title,
      description: data.landing.appFeatures.sixth.description,
      id: 'question6',
    },
  ];

  const getFormQuestions = () => {
    let counter = 0;
    const newQuestionsData = [];

    while (data.landing.questions[counter]?.title) {
      newQuestionsData.push({
        title: data.landing.questions[counter]?.title,
        description: data.landing.questions[counter].description,
        id: `question${counter}`,
      });
      counter += 1;
    }

    setQuestionsData(newQuestionsData);
  };

  useEffect(() => {
    getFormQuestions();
  }, []);

  return {
    explanationData,
    questionsData,
  };
};

export default useGetAllData;
