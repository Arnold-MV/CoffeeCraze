import React, { useState } from 'react'
import CardMain from './CardMain'
import { cafes } from '../../data/data'

const HeroMain = () => {
  const categoritasUnicas = ['Todo', ...new Set(cafes.map(filtro => filtro.categoria))]

  const [selecionar, setSelecionar] = useState('Todo')

  const handleCategoria = (categoria) => {
    setSelecionar(categoria)
  }

  return (
    <main className='flex flex-col items-center gap-3 px-4 pb-20 mt-5 lg:pb-4 sm:px-8'>
      <nav className='w-full overflow-auto'>
        <ul className='flex items-center justify-start w-full gap-2 '>
          {categoritasUnicas.map((categoria) => (
            <li key={categoria}>
              <button
                className={`px-4 py-3 hover:bg-caramelo transition-all hover:text-white  select-none hover:font-semibold rounded-xl whitespace-nowrap ${
                selecionar === categoria ? 'bg-caramelo font-semibold  text-white' : 'bg-white'
            }`}
                onClick={() => handleCategoria(categoria)}
              >
                {categoria}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <CardMain selecionar={selecionar} />

    </main>
  )
}

export default HeroMain
