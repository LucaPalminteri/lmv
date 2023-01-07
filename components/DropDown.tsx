'use client'
import {ReactElement, useState} from 'react'

import React from 'react'

function DropDown({title, items}:{title:string,items:Array<string>}) {

    const [showDropDown, setShowDropDown] = useState(false)

    let arrCategories:Array<ReactElement> = []

    items.map((category:string,index:number) => {
        arrCategories.push(
            <li key={index}>
                <span>{category}</span>
            </li>
        )
    })

  return (
    <div onMouseOver={()=>setShowDropDown(true)} onMouseLeave={()=>setShowDropDown(false)} className='nav-item'>
        {title}

        {
            //title == 'CATEGORÍAS' &&
            showDropDown &&
            <ul className='dropdown'>
                {arrCategories}
            </ul>
        }
    </div>
  )
}

export default DropDown