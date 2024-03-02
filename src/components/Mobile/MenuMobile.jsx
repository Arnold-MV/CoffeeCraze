import React, { useState } from 'react'

import { RiHeart2Fill, RiHome5Fill, RiShoppingBagFill } from 'react-icons/ri'
import { useSearchContext } from '../../SearchContext'

const MenuMobile = () => {
  const [selecion, setSelecion] = useState('inicio')

  const handleSelecion = (e) => {
    setSelecion(e)
  }

  const { setShop } = useSearchContext()

  return (
    <nav className='fixed bottom-0 z-50 w-full h-16 px-5 py-2 bg-white rounded-t-xl lg:hidden'>
      <section><ul className='flex items-start justify-between text-xl '>
        <li className=''>
          <button
            onClick={() => {
              setShop(false)
              handleSelecion('inicio')
            }}
            className={` hover:text-caramelo ${selecion === 'inicio' ? 'text-caramelo' : 'text-color3'} flex flex-col gap-2 group`}
          >
            <RiHome5Fill />
            <span className={` ${selecion === 'inicio' ? 'block' : 'hidden'} w-full h-2 rounded-md group-hover:block bg-caramelo`} />
          </button>
        </li>
        <li className=''>
          <button
            onClick={() => {
              setShop(true)
              handleSelecion('carrito')
            }}
            className={` hover:text-caramelo ${selecion === 'carrito' ? 'text-caramelo' : 'text-color3'} flex flex-col gap-2 group`}
          >
            <RiShoppingBagFill />
            <span className={` ${selecion === 'carrito' ? 'block' : 'hidden'} w-full h-2 rounded-md group-hover:block bg-caramelo`} />
          </button>
        </li>
        <li className=''>
          <button
            onClick={() => handleSelecion('favorito')}
            className={` hover:text-caramelo ${selecion === 'favorito' ? 'text-caramelo' : 'text-color3'} flex flex-col gap-2 group`}
          >
            <RiHeart2Fill />
            <span className={` ${selecion === 'favorito' ? 'block' : 'hidden'} w-full h-2 rounded-md group-hover:block bg-caramelo`} />
          </button>
        </li>
               </ul>
      </section>
    </nav>
  )
}

export default MenuMobile
