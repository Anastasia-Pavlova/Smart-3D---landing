/* eslint-disable import/no-unresolved */
import React from 'react';
import s from './App.module.scss';
import Activation from './components/Activation/Activation';
import Add from './components/Add';
import BannerSlider from './components/BannerSlider';
import EarnAndAdvantages from './components/EarnAndAdvantages';
import Footer from './components/Footer';
import Header from './components/Header';
import How from './components/How';
import MobileApp from './components/MobileApp';
import NewBrand from './components/NewBrand';
import PartnerHave from './components/PartnerHave';
import PartnerTools from './components/PartnerTools/PartnerTools';
import Partnership from './components/Partnership';
import Products from './components/Products';
import ProgramVideo from './components/ProgramVideo';
import Promotion from './components/Promotion/Promotion';
import Questions from './components/Questions';
import RightsDefense from './components/RightsDefense';
import { useMainContext } from './context';
import { advantagesData, earnData } from './data';

import Earn from './assets/images/earn.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import GotTheLicense from './assets/images/gotTheLicence.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import ManageCompany from './assets/images/manageCompany.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';

import BestGift from './assets/images/bestGift.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import MoreLicenses from './assets/images/moreLicenses.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';
import SellTheCompany from './assets/images/sellTheCompany.webp?sizes[]=320,sizes[]=640,sizes[]=960,sizes[]=1200,sizes[]=1800,sizes[]=2048';

import allData from '../data.json';
import MultiLang from './assets/images/multiLang.webp';
import Painting from './assets/images/painting.webp';
import PhoneCatalog from './assets/images/phoneCatalog.webp';
import PromoCode from './assets/images/promoCode.webp';
import { PromotionButton, VipButton } from './components/PromotionButtons/PromotionButtons';

const App = () => {
  const { explanationData, questionsData } = useMainContext();

  return (
    <div className={s.root}>
      <Header />
      <BannerSlider />
      <Promotion
        title={allData.landing.promotion.title}
        description={allData.landing.promotion.description}
        image={allData.landing.promotion.image}
        actionButton={<PromotionButton />}
      />
      <Products />
      <NewBrand />
      <MobileApp />
      <EarnAndAdvantages
        type="earn"
        title={allData.landing.earn.title}
        description={allData.landing.earn.description}
        data={earnData}
        images={[GotTheLicense, ManageCompany, Earn]}
      />
      <PartnerHave />
      <ProgramVideo />
      <PartnerTools
        title={allData.landing.tools.title}
        data={[
          {
            title: allData.landing.tools.first.title,
            desription: allData.landing.tools.first.description,
            image: MultiLang,
          },
          {
            title: allData.landing.tools.second.title,
            desription: allData.landing.tools.second.description,
            image: PromoCode,
          },
          {
            title: allData.landing.tools.third.title,
            desription: allData.landing.tools.third.description,
            image: Painting,
          },
          {
            title: allData.landing.tools.fourth.title,
            desription: allData.landing.tools.fourth.description,
            image: PhoneCatalog,
          },
        ]}
      />
      <Partnership />
      <Questions questions={explanationData} title={allData.landing.appFeatures.title} showButton={false} />
      <How />
      <Activation />
      <EarnAndAdvantages
        type="advantages"
        title={allData.landing.advantages.title}
        description={allData.landing.advantages.description}
        data={advantagesData}
        id="advantages"
        images={[MoreLicenses, BestGift, SellTheCompany]}
      />
      <Promotion
        title={allData.landing.vip.title}
        description={allData.landing.vip.description}
        image={allData.landing.vip.image}
        id={allData.vip}
        actionButton={<VipButton />}
      />
      <RightsDefense />
      <Add title={allData.landing.add.title} description={allData.landing.add.description} />
      <div className={s.divider} />
      <PartnerTools
        title={allData.landing.tools2.title}
        data={[
          {
            title: allData.landing.tools2.first.title,
            desription: allData.landing.tools2.first.description,
            image: allData.landing.tools2.first.image.URL,
          },
          {
            title: allData.landing.tools2.second.title,
            desription: allData.landing.tools2.second.description,
            image: allData.landing.tools2.second.image.URL,
          },
          {
            title: allData.landing.tools2.third.title,
            desription: allData.landing.tools2.third.description,
            image: allData.landing.tools2.first.image.URL,
          },
          {
            title: allData.landing.tools2.fourth.title,
            desription: allData.landing.tools2.fourth.description,
            image: allData.landing.tools2.fourth.image.URL,
          },
        ]}
      />
      <Add title={allData.landing.add2.title} description={allData.landing.add2.description} />
      <Questions questions={questionsData} title={allData.landing.questions.title} id="questions" />
      <Footer />
    </div>
  );
};

export default App;
