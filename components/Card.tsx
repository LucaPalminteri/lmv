import React from 'react'

type Props = {
    title:string;
    price:int;
}

function Card(props:Props) {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card