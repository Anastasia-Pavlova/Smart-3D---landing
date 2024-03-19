import React from 'react';
import allData from '../../../data.json';
import Constructor from '../../assets/icons/3d-constructor.svg';
import ColoredConstructor from '../../assets/icons/3d-constructorColored.svg';
import Catalog from '../../assets/icons/catalog.svg';
import Chat from '../../assets/icons/chat.svg';
import CorporateLogo from '../../assets/icons/corporateLogo.svg';
import Design from '../../assets/icons/design.svg';
import Distribution from '../../assets/icons/distribution.svg';
import Door from '../../assets/icons/door.svg';
import Panels from '../../assets/icons/panels.svg';
import Star from '../../assets/icons/star.svg';
import BackImage from '../../assets/images/img-landing.webp';
import s from './Products.module.scss';

const Products = () => {
  return (
    <>
      <div className="title" id="production">
        {allData.landing.products.title}
      </div>
      <div className={s.root}>
        <div className={s.leftColumn}>
          <img src={BackImage} alt="" className={s.backImage} />
          <CorporateLogo />
        </div>
        <div className={s.products}>
          {productLines.map((line) => (
            <div key={`${line.id}productLine`} className={s.productsLine}>
              {line.products.map((product) => (
                <div className={s.product} key={`${product.id}productInLineItem`}>
                  <div className={s.productTitle}>{product.title}</div>
                  <div className={s.productImage}>{product.image}</div>
                  <div className={s.productDescription}>{product.description}</div>
                </div>
              ))}
              <div className={s.lineText}>
                <div className={s.lineTitle}>{line.title}</div>
                <div className={s.lineDescription}>{line.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const productLines = [
  {
    title: allData.landing.products.digital.title,
    description: allData.landing.products.digital.description,
    products: [
      {
        title: allData.landing.products.constructor.title,
        image: <ColoredConstructor />,
        description: allData.landing.products.constructor.description,
        id: 11,
      },
      {
        title: allData.landing.products.catalog.title,
        image: <Catalog />,
        description: allData.landing.products.catalog.description,
        id: 12,
      },
      {
        title: allData.landing.products.chat.title,
        image: <Chat />,
        description: allData.landing.products.chat.description,
        id: 13,
      },
    ],
    id: 1,
  },
  {
    title: allData.landing.products.physical.title,
    description: allData.landing.products.physical.description,
    products: [
      {
        title: allData.landing.products.doors.title,
        image: <Door />,
        description: allData.landing.products.doors.description,
        id: 21,
      },
      {
        title: allData.landing.products.panels.title,
        image: <Panels />,
        description: allData.landing.products.panels.description,
        id: 22,
      },
      {
        title: allData.landing.products.innovations.title,
        image: <Star />,
        description: allData.landing.products.innovations.description,
        id: 23,
      },
    ],
    id: 2,
  },
  {
    title: allData.landing.products.mobileApps.title,
    description: allData.landing.products.mobileApps.description,
    products: [
      {
        title: allData.landing.products.companyApp.title,
        image: <Constructor />,
        description: allData.landing.products.companyApp.description,
        id: 31,
      },
      {
        title: allData.landing.products.designApp.title,
        image: <Design />,
        description: allData.landing.products.designApp.description,
        id: 32,
      },
      {
        title: allData.landing.products.distributionApp.title,
        image: <Distribution />,
        description: allData.landing.products.distributionApp.description,
        id: 33,
      },
    ],
    id: 3,
  },
];

export default Products;
