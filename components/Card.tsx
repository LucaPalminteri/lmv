import React from 'react'
import { Publicacion } from '../data/types.ts'
import Image from 'next/image'

const myLoader = ({ src, width, quality }:{src:string,width:number,quality:number}) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

function Card({publicacion}:Publicacion) {
  return (
    <div className='card'>
      <div className='card__image'>
        <Image src={publicacion.image} width={250} height={250} alt={"asdf"} />
      </div>
      <span className='card__price'>${publicacion.price}</span>
      <span className='card__cuotas'>18 Cuotas Fijas De 8798</span>
      <a className='card__title'>{publicacion.title}</a>
      <button>
        <span>comprar</span>
      </button>
    </div>
  )
}

export default Card