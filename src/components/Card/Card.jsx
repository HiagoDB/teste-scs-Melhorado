  import React from 'react'
  import carYImg from '../../assets/data.svg'
  import carVeloImg from '../../assets/velocidadeMaxima.svg'
  import carEfEImg from '../../assets/efiEnergetica.svg'
  import carRateImg from '../../assets/classificacaoPublico.svg'
  import './Card.css'

  const Card = ({carImage, carName, carYear, carVelo, carEfE, carRate}) => {


    return (
    <div className='cardContainer'>
      <div className='cad'>
        <img className='carroCard' src={carImage} alt={carName} />
        <div className='cardItem'>
          <p className='textMustang'>Mustang</p>
          <ul className='ulCard'>
            <li className='liItem'>
              <img src={carYImg
              } alt="data"/>
              <span>{carYear}</span>
            </li>
            <li className='liItem'>
              <img src={carVeloImg} alt="velocidade"/>
              <span>{carVelo}</span>
            </li>
            <li className='liItem'>
              <img src={carEfEImg} alt="eficiência energetica"/>
              <span>{carEfE}</span>
            </li>
            <li className='liItem'>
              <img src={carRateImg} alt="classificação do público"/>
              <span>{carRate}</span>
            </li>
          </ul>
          <button className='cardBtn'>Ver carro</button>
        </div>
      </div>
    </div>
    )
  }

  export default Card