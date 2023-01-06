import React, { ReactElement } from 'react'
import Card from './Card'
import publicaciones from '../data/publicaciones.json'
import {Publicacion} from '../data/types.ts'

function Main() {

  arrPublicaciones = []
  publicaciones.map((publicacion:Publicacion,index:number) => {
    arrPublicaciones.push(
      <Card title={publicacion.title} price={publicacion.price} />
    )
  })

  return (
    <div className='main'>
        {arrPublicaciones}
    </div>
  )
}

export default Main