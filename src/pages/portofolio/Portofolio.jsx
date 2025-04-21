import React from 'react'
import { portofolio } from '../../data'
import PortofolioItem from '../../components/PortofolioItem'
import "./portofolio.css"

const Portofolio = () => {
  return (
    <section className='portofolio section'>
      <h2 className='section__title'>
        My <span>Portofolio</span>
      </h2>

      <div className='portofolio__container container grid'>
        {portofolio.map((item) => (
          <PortofolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portofolio