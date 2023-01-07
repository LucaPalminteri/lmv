import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import DropDown from './DropDown'
import { categories,fliaTvAudioVideo,fliaInformatica } from '../data/categories'

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
            <a href='/' className='nav-item'>INICIO</a>
            <a href='/' >
              <DropDown title={'CATEGORÍAS'} items={categories}/>
            </a>
            <a href='/'  >
              <DropDown title={'TV, AUDIO Y VIDEO'}  items={fliaTvAudioVideo}/>
            </a>
            <a href='/' >
              <DropDown title={'INFORMÁTICA'}  items={fliaInformatica}/>
            </a>
            <a href='/' >
              <DropDown title={'CLIMATIZACIÓN'}  items={['PEQUEÑOS ELECTRODOMÉSTICOS','BAZAR','RODADOS','HOGAR','JARDÍN']}/>
            </a>
            <a href='/' >
              <DropDown title={'CELULARES'}  items={['PEQUEÑOS ELECTRODOMÉSTICOS','BAZAR','RODADOS','HOGAR','JARDÍN']}/>
            </a>
            <a href='/' className='nav-item'>OFERTAS</a>
            <a href='/' className='nav-item'>AHORA 99</a>
            <a href='/' className='nav-item'>ULTIMAS UNIDADES</a>
        </div>
    </header>
  )
}

export default Header