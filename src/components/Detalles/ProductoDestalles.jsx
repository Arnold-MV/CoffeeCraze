import { RiAddLine, RiArrowLeftSLine, RiSubtractLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../../SearchContext'
import { useState } from 'react'

const ProductoDestalles = ({ item }) => {
  const { carrito, actualizarCantidadYTotal } = useSearchContext()
  const [cantidad, setCantidad] = useState(1)

  const handleAumentar = () => {
    if (cantidad < item.cantidad) {
      setCantidad(cantidad + 1)
      actualizarCantidadYTotal(item.id, cantidad + 1)
    }
  }

  const handleDisminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
      actualizarCantidadYTotal(item.id, cantidad - 1)
    }
  }

  const precioTotal = item.precio * cantidad

  return (
    <article className='h-full pb-20'>
      <header className='flex items-center justify-between py-3 shadow px-7 '>
        <Link to='/' className='text-2xl'><RiArrowLeftSLine /></Link>
        <h2 className='text-lg font-semibold '>Detalles</h2>
        <div />
      </header>

      <section className='flex flex-col items-center w-full h-full gap-5 pb-4 mt-10 xl:h-auto xl:justify-between xl:flex-row lg:px-40 sm:px-24 md:px-28 px-7 xl:px-9 xl:mt-20 xl:items-start xl:gap-0'>
        <figure className='object-cover w-full h-72 sm:h-72 xl:w-[26.125rem] xl:h-[26.125rem] rounded-xl'>
          <img className='object-cover w-full h-full rounded-xl' src={item.imagen} alt='Café Affogato' />
        </figure>

        <section className='flex flex-col items-start justify-between w-full h-full xl:w-[43.438rem] xl:h-[26.125rem] xl:py-2'>

          <section>
            <h3 className='text-base font-semibold text-color2'>{item.nombre}</h3>
            <span className='text-sm text-color3'>{item.categoria}</span>
            <p className='text-sm text-[#606060]'>{item.descripcion}</p>
          </section>

          <section className='flex flex-col items-start w-full gap-2 '>
            <h3 className='font-semibold text-color2'>Cantidad</h3>
            <div className='flex flex-col w-full gap-2 px-5 md:justify-between md:items-center md:flex-row sm:px-0'>
              <div className='flex items-center justify-between md:gap-16'>
                <div className='flex items-center gap-2 '>
                  <button
                    onClick={handleAumentar}
                    className='p-1 transition-all bg-white rounded-md hover:scale-110'
                  >
                    <RiAddLine />
                  </button>
                  <span className='text-color2'> {cantidad}</span>
                  <button
                    onClick={handleDisminuir}
                    className='p-1 transition-all bg-white rounded-md hover:scale-110'
                  >
                    <RiSubtractLine />
                  </button>
                </div>
                {/* precio */}
                <span className='text-lg font-semibold text-caramelo'>S/{precioTotal}</span>
              </div>
              <button className='py-5 font-bold text-white transition-all rounded-lg md:px-12 active:scale-100 hover:scale-105 bg-caramelo'>Comprar Ahora</button>
            </div>
          </section>
        </section>
      </section>

    </article>
  )
}

export default ProductoDestalles
