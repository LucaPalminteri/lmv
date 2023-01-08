import React from 'react'
import publicactions from '../../../data/publicaciones.json'
import {Publicacion} from '../../../data/types'

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
    <div>
      <h1>Params: {params.id}</h1>
      <h1>ID: {publication?.id}</h1>
      <h1>Title: {publication?.title}</h1>
    </div>
  )
}



export default page