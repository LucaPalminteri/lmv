import React, { ReactElement } from 'react'
import Card from './Card'
import publicaciones from '../data/publicaciones.json'
import {Publicacion} from '../data/types'

function Main() {

  let arrPublicaciones:Array<ReactElement> = []
  publicaciones.map((publicacion:Publicacion,index:number) => {
    arrPublicaciones.push(
      <Card publicacion={publicacion} key={publicacion.id}/>
    )
  })

  return (
    <div className='main'>
        {arrPublicaciones}
    </div>
  )
}

export default Main