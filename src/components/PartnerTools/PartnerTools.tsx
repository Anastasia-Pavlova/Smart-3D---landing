import React from 'react';
import PartnerTool from '../PartnerTool/PartnerTool';
import s from './PartnerTools.module.scss';

type Tool = {
  title: string;
  desription: string;
  image: string;
};

type Props = {
  title: string;
  data: Array<Tool>;
};

const PartnerTools: React.FC<Props> = ({ title, data }) => {
  return (
    <div className={s.root} id="tools">
      <div className="title">{title}</div>
      <div className={s.tools}>
        {data.map((tool) => (
          <PartnerTool title={tool.title} image={tool.image} description={tool.desription} key={tool.title} />
        ))}
      </div>
    </div>
  );
};

export default PartnerTools;
