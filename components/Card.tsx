import React from 'react'
import { Publicacion } from '../data/types'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'

function Card({publicacion}:{publicacion:Publicacion}) {
 
  return (
    <div className='card'>
      {/* <Link href={`/publication/1`}> */}
        <div className='card__image'>
        <Link href={`/publication/${publicacion.id}`} className='card__title'>
          <Image src={publicacion.image} width={250} height={250} alt={"asdf"} />
        </Link>
        </div>
        <span className='card__price'>${publicacion.price}</span>
        <span className='card__cuotas'>18 Cuotas Fijas De 8798</span>
        <Link href={`/publication/${publicacion.id}`} className='card__title'>{publicacion.title}</Link>
        <button>
          <span>comprar</span>
        </button>
      {/* </Link> */}
    </div>
  )
}

export default Card