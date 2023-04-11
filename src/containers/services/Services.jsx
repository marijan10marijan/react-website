import React from 'react'
import Card from '../../componenets/card/Card';
import Cto from '../../assets/services1.svg';
import Fullstack from '../../assets/services2.svg';
import Mobile from '../../assets/services3.png';
import DevOps from '../../assets/services4.png';

function Services() {
  return (
    <section className="container services">
        <p className='services__title'>Services</p>
        <div className="services__grid">
            <Card image={Cto} title='CTO' number='01' text='Our team of pre-vetted, veteran CTOs will help with tech strategy, team building, R&D management, deep-tech and architectural decision-making.'/>
            <Card image={Fullstack} title='Fullstack' number='02' text='To rapidly build serious complex business software,  we deploy our fullstack innovation squads, experts in modern stack.'/>
            <Card image={Mobile} title='Mobile' number='03' text='We  specialize in creating end-to-end tailor-made mobile solutions using latest Hybrid and Native technologies and with a seamless native user interface design.'/>
            <Card image={DevOps} title='DevOps' number='04' text='We specialize in cloud infrastructure to provide you with consistent and gradual upgrades between versions. We will keep your products running at all times'/>
        </div>
    </section>
  )
}

export default Services