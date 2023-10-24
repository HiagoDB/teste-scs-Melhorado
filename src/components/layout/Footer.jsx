import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerNothing'>

      </div>
      <div className='footerTexts'>
        <h1>Mustang</h1>
        <span>O Ford Mustang é um automóvel desportivo produzido pela  <br />
              Ford Motor Company. O carro foi apresentado ao público em <br />
              17 de abril de 1964 durante a New York World's Fair. O <br />
              Mustang, apesar de ter sofrido grandes alterações ao longo <br />
              dos anos é a mais antiga linha de automóveis da Ford.
        </span>
        <button className='footerBtn'>Ver carro</button>
      </div>
    </div>
  )
}

export default Footer