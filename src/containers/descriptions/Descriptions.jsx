import React from 'react';
import SponsorOne from '../../assets/sponsor1.png';
import SponsorTwo from '../../assets/sponsor2.png';
import SponsorThree from '../../assets/sponsor3.png';
import SponsorFour from '../../assets/sponsor4.png';
import SponsorFive from '../../assets/sponsor5.png';
import SponsorSix from '../../assets/sponsor6.png';
import SponsorSeven from '../../assets/sponsor7.png';
import SponsorEight from '../../assets/sponsor8.png';
import SponsorNine from '../../assets/sponsor9.png';
import SponsorTen from '../../assets/sponsor10.png';

const Descriptions = () => {
  return (
    <section className="container description">
        <h1 className="description__title">
            From concept and planning, to engineering and support, we build it fast and right.
        </h1>
        <div className="description__box">
            <img className='desription__box-img' src={SponsorOne} alt="sponsor image" />
            <img src={SponsorTwo} alt="sponsor image" />
            <img src={SponsorThree} alt="sponsor image" />
            <img src={SponsorFour} alt="sponsor image" />
            <img src={SponsorFive} alt="sponsor image" />
            <img src={SponsorSix} alt="sponsor image" />
            <img src={SponsorSeven} alt="sponsor image" />
            <img src={SponsorEight} alt="sponsor image" />
            <img src={SponsorNine} alt="sponsor image" />
            <img src={SponsorTen} alt="sponsor image" />
        </div>
    </section>
  )
}

export default Descriptions