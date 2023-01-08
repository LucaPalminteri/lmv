import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import DropDown from './DropDown'
import { categories,fliaTvAudioVideo,fliaInformatica,fliaClimatizacion,fliaCelulares } from '../data/categories'
import Link from 'next/link'

function Header() {
  return (
    <header id='header'>
        <div className="links">
          <Link href="#">RED LUCA</Link> 
          <div className='vertical-line'></div>
          <Link href="#">QUIÉNES SOMOS</Link>
          <div className='vertical-line'></div>
          <Link href="#">CENTRO DE AYUDA</Link>
        </div>
        <div className='header__container'>
          <Link href={'/'}>
            <Image
              className='header__logo'
              src={"/LMV.jpg"}
              width={264}
              height={74}
              alt="Logo LMV"
            />
          </Link>
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
            <Link href='/' className='nav-item'>INICIO</Link>
            <Link href='/market/categories' >
              <DropDown title={'CATEGORÍAS'} items={categories}/>
            </Link>
            <Link href='/market/tv-audio-video'  >
              <DropDown title={'TV, AUDIO Y VIDEO'}  items={fliaTvAudioVideo}/>
            </Link>
            <Link href='/market/informatics' >
              <DropDown title={'INFORMÁTICA'}  items={fliaInformatica}/>
            </Link>
            <Link href='/market/climatization' >
              <DropDown title={'CLIMATIZACIÓN'}  items={fliaClimatizacion}/>
            </Link>
            <Link href='/market/smartphones' >
              <DropDown title={'CELULARES'}  items={fliaCelulares}/>
            </Link>
            <Link href='/market/offers' className='nav-item'>OFERTAS</Link>
            <Link href='/market/ahora-99' className='nav-item'>AHORA 99</Link>
            <Link href='/market/last-units' className='nav-item'>ULTIMAS UNIDADES</Link>
        </div>
    </header>
  )
}

export default Header