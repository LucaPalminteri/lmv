import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning'

function Header() {
  return (
    <header id='header'>
        <div className="links">
          <a href="#">RED LUCA</a> 
          <div className='vertical-line'></div>
          <a href="#">QUIÉNES SOMOS</a>
          <div className='vertical-line'></div>
          <a href="#">CENTRO DE AYUDA</a>
        </div>
        <div className='header__container'>
            <Image
              className='header__logo'
              src={"/LMV.jpg"}
              width={264}
              height={74}
              alt="Logo LMV"
            />
            <div className='header__search'>
              <input type="text" placeholder='Buscar...'/>
              <select name="select" id="">
                <option value="Todas las categorias" selected>Todas las categorias</option>
              </select>
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
              </button>
            </div>
            <div className='header__contact'>
              <span>CONTACTANOS AL</span>
              <strong>(341) 216 9777</strong>
              <a>346958</a>
            </div>
        </div>
        <div className='navbar'>
            <div className='nav-item'>INICIO</div>
            <div className='nav-item'>CATEGORÍAS</div>
            <div className='nav-item'>TV, AUDIO Y VIDEO</div>
            <div className='nav-item'>INFORMÁTICA</div>
            <div className='nav-item'>CLIMATIZACIÓN</div>
            <div className='nav-item'>CELULARES</div>
            <div className='nav-item'>OFERTAS</div>
            <div className='nav-item'>AHORA 99</div>
            <div className='nav-item'>ULTIMAS UNIDADES</div>
        </div>
    </header>
  )
}

export default Header