import React from 'react'
import publicactions from '../../../data/publicaciones.json'
import {Publicacion} from '../../../data/types'
import Image from 'next/image';

function binarySearch(publications: Array<Publicacion>, target: number): Publicacion | null {
  let left: number = 0;
  let right: number = publications.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (publications[mid].id === target) return publications[mid];
    if (target < publications[mid].id) right = mid - 1;
    else left = mid + 1;
  }

  return null;
}

function page({
  params,
}: {
  params: { id: string };
}) {
  let publication: Publicacion | null = publicactions[parseInt(params.id)-1]

  return (
    <div className='publication'>
      <div className="main-container">
        <div className="left">
          <Image src={publication.image} width={250} height={250} alt={"asdf"} />
        </div>
        <div className="right">
          <h1 className='product-title'>{publication.title}</h1>
          <label>(cod.2134)</label>
          <p className='product-price'>${publication.price}</p>
          <span>OFERTA ESPECIAL</span>
          <span>18 CUOTAS FIJAS DE $5674567</span>
          <a href="#">VER OFERTAAS DE PAGO Y FINANCIACION</a>
          <h3>EXTENDE TU GARANTIA</h3>
          <p>Envio Bonificado</p>
          <p>Retiro en sucursal</p>
          <p>cambio y devoluciones sin costo</p>
        </div>
      </div>
    </div>
  )
}



export default page