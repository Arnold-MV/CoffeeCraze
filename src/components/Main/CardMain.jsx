import { RiAddFill } from 'react-icons/ri'
import { cafes } from '../../data/data'
import { useSearchContext } from '../../SearchContext'
import { Link } from 'react-router-dom'

const CardMain = ({ selecionar }) => {
  const { nombreBuscado, agregarCarrito } = useSearchContext()

  const cafeFiltro = selecionar === 'Todo' ? cafes : cafes.filter(cafe => cafe.categoria === selecionar)

  // Filtrar cafés por nombre
  const cafesFiltradosPorNombre = cafeFiltro.filter(cafe => {
    return cafe.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
  })

  return (
    <article
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(144px, 1fr))'
      }}
      className='justify-center w-full gap-4 place-items-center'
    >
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(144px, 1fr))'
        }}
        className='justify-center w-full gap-4 place-items-center'
      >
        {cafesFiltradosPorNombre.map((cafe) => {
          return (
            <article
              key={cafe.id}
              className='flex flex-col gap-2 px-1 pt-1 pb-3 bg-white shadow-lg product rounded-2xl w-36'
            >

              <Link to={`/detalle/${cafe.id}`} className='w-full h-32'>
                <img className='object-cover w-full h-full rounded-2xl' src={cafe.imagen} alt={cafe.nombre} />
              </Link>
              <section className='flex flex-col gap-1 text-left'>
                <h3 className='text-sm font-semibold letter-spacing text-color2'>{cafe.nombre}</h3>
                <p className='overflow-hidden text-xs text-color3 text-ellipsis whitespace-nowrap'>{cafe.descripcion}</p>
              </section>
              <div className='flex items-center justify-between'>
                <span className='text-lg font-semibold text-color1'>S/ {cafe.precio}</span>
                <button
                  onClick={() => agregarCarrito(cafe)}
                  className='p-2 text-white transition-all rounded-lg active:scale-100 bg-caramelo hover:scale-105'
                ><RiAddFill />
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </article>
  )
}

export default CardMain

// import { RiAddFill } from 'react-icons/ri'
// import { cafes } from '../../data/data'
// import { useSearchContext } from '../../SearchContext'

// const CardMain = ({ selecionar }) => {
//   const { nombreBuscado, agregarCarrito } = useSearchContext()

//   const cafeFiltro = selecionar === 'Todo' ? cafes : cafes.filter(cafe => cafe.categoria === selecionar)

//   // Filtrar cafés por nombre
//   const cafesFiltradosPorNombre = cafeFiltro.filter(cafe => {
//     return cafe.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
//   })

//   return (
//     <ul
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(144px, 1fr))'
//       }}
//       className='justify-center w-full gap-4 place-items-center'
//     >
//       {cafesFiltradosPorNombre.map((cafe) => {
//         return (
//           <li
//             key={cafe.id}
//             className='flex flex-col gap-2 px-1 pt-1 pb-3 bg-white shadow-lg rounded-2xl w-36'
//           >
//             <div className='w-full h-32'>
//               <img className='object-cover w-full h-full rounded-2xl' src={cafe.imagen} alt={cafe.nombre} />
//             </div>
//             <div className='flex flex-col gap-1 text-left'>
//               <h3
//                 style={
//                 {
//                   letterSpacing: '-0.5px'
//                 }
//               }
//                 className='text-sm font-semibold letter-spacing text-color2'
//               >{cafe.nombre}
//               </h3>
//               <p className='overflow-hidden text-xs text-color3 text-ellipsis whitespace-nowrap'>{cafe.descripcion}</p>
//             </div>
//             <div className='flex items-center justify-between'>
//               <span className='text-lg font-semibold text-color1'>S/ {cafe.precio}</span>
//               <button
//                 onClick={() => agregarCarrito(cafe)}
//                 className='p-2 text-white transition-all rounded-lg active:scale-100 bg-caramelo hover:scale-105'
//               ><RiAddFill />
//               </button>
//             </div>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

// export default CardMain
