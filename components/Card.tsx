import React from 'react'
import { Publicacion } from '../data/types.ts'

function Card(props:Publicacion) {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card