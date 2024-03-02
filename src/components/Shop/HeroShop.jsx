import React from 'react'
import { useSearchContext } from '../../SearchContext'
import { RiAddLine, RiCloseCircleFill, RiDeleteBin6Fill, RiSubtractLine } from 'react-icons/ri'

const HeroShop = () => {
  const { shop, carrito, eliminarCarrito, agregarCarrito, disminuirDelCarrito, calcularCostoTotal, setShop } = useSearchContext()

  return (
    <article
      className={` ${shop ? '' : 'hidden'} transition-all lg:pt-2 fixed flex flex-col justify-between top-0 z-30 w-full px-3 pt-3 h-screen lg:absolute lg:h-auto pb-20 text-white bg-header lg:w-96 lg:right-0 lg:pb-4`}
    >
      <header className='mb-2 text-3xl text-left text-caramelo '>
        <button onClick={() => setShop(false)}><RiCloseCircleFill className='transition-all active:scale-100 hover:scale-105' /></button>
      </header>

      <section className='flex flex-col gap-2  overflow-auto  h-[90%]'>
        <ul className='list-none'>
          {carrito.map((cafe) => (
            <li
              key={cafe.id}
              className='flex items-center justify-between p-1 rounded-md bg-principal text-color2'
            >
              <div className='flex gap-1'>
                <div className='h-14 w-14'>
                  <img className='object-cover w-full h-full rounded-xl' src={cafe.imagen} alt={cafe.nombre} />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3
                    className='text-sm font-semibold text-ellipsis whitespace-nowrap letter-spacing '
                  >{cafe.nombre}
                  </h3>
                  <p className='overflow-hidden text-xs w-28 text-color3 text-ellipsis whitespace-nowrap'>{cafe.descripcion}</p>
                  <span className='text-sm font-semibold text-color1'>S/{cafe.precio}</span>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <button
                    className='p-1 bg-white rounded-md'
                    onClick={() => agregarCarrito(cafe)}
                    disabled={cafe.cantidad >= cafe.cantidadMaxima}
                  >
                    <RiAddLine />
                  </button>
                  <span>{cafe.cantidad}</span>
                  <button
                    className='p-1 bg-white rounded-md'
                    onClick={() => disminuirDelCarrito(cafe.id)} disabled={cafe.cantidad <= 1}
                  >
                    <RiSubtractLine />
                  </button>
                </div>
                <button
                  className='text-xl text-red-700 transition-all hover:text-red-600'
                  onClick={() => eliminarCarrito(cafe.id)}
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>

            </li>
          ))}
        </ul>
      </section>

      {/* Muestra el costo total */}
      <footer className='flex flex-col gap-3'>
        <div className='flex items-center justify-between text-lg font-semibold'>
          <span className='text-base'>Precio Total</span>
          <span className='text-caramelo'>S/{calcularCostoTotal()}</span>
        </div>
        <button className='py-2 font-semibold transition-all rounded-lg active:scale-100 hover:scale-105 bg-caramelo'>Comprar</button>
      </footer>
    </article>
  )
}

export default HeroShop
