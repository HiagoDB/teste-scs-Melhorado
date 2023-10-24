import React from 'react'
import seta from '../../assets/seta.svg'
import carro1 from '../../assets/Carro1Main.svg'
import carro2 from '../../assets/Carro2Main.svg'
import carro3 from '../../assets/Carro3Main.svg'

import Card from '../Card/Card'
import './Main.css'

const Main = () => {
  return (
      <div className='cardsContainer'>
        <div className='pushArrow'>
          <img className='seta' src={seta} />
        </div>
        <Card carImage={carro1} carName={'Mustang'} carRate={'8/10'} carEfE={'9/10'} carVelo={'180 Km/h'} carYear={2015}/>
        <Card carImage={carro2} carName={'Mustang'} carRate={'9/10'} carEfE={'9/10'} carVelo={'180 Km/h'} carYear={2015}/>
        <Card carImage={carro3} carName={'Mustang'} carRate={'6/10'} carEfE={'9/10'} carVelo={'180 Km/h'} carYear={2015}/>
      </div>
      
  )
}

export default Main