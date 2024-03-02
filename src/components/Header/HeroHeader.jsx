import { RiSearchLine } from 'react-icons/ri'
import Baner from '../../assets/img/Baner.webp'
import MenuHeader from './MenuHeader'
import { useSearchContext } from '../../SearchContext'
import HeroMain from '../Main/HeroMain'

const HeroHeader = () => {
  const { nombreBuscado, setSearch } = useSearchContext()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Realiza cualquier otra lógica que necesites, como actualizar el estado de búsqueda
    setSearch(nombreBuscado)
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    setSearch(inputValue)
  }

  return (
    <>
      <header className='relative flex flex-col gap-6 px-4 text-left xl:gap-8 pt-9 sm:px-8'>
        <div className='absolute top-0 left-0 z-0 w-full bg-header h-4/5 md:h-3/4' />
        <section className='flex flex-col items-center gap-7 lg:flex-row lg:justify-between'>
          <h1 className='relative z-10 w-full text-4xl font-bold lg:w-auto text-caramelo'>CoffeeCraze</h1>
          <div className='z-10 flex w-full md:w-[38rem]'>
            <form
              className='z-10 flex items-center justify-between w-full gap-3 px-4 py-2 rounded-xl bg-input'
              onSubmit={handleFormSubmit}
            >
              <input
                value={nombreBuscado}
                onChange={handleInputChange}
                className='z-10 w-full text-sm bg-transparent outline-none text-white/80 lg:w-96 '
                placeholder='Buscar...'
              />
              <button type='submit' className='hover:scale-105 active:scale-100 transition-all z-10 text-xl rounded-md text-[#F8F8F8] bg-caramelo p-2'>
                <RiSearchLine />
              </button>
            </form>
          </div>
          <nav className='z-10'>
            <MenuHeader />
          </nav>
        </section>
        <section className='z-10 w-full h-36 sm:h-52  md:w-[38rem] xl:w-[59.875rem] xl:h-[18rem] mx-auto'>
          <img className='object-cover w-full h-full rounded-2xl' src={Baner} alt='' />
        </section>
      </header>
      <HeroMain />
    </>
  )
}

export default HeroHeader
