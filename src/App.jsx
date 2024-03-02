import HeroDetalles from './components/Detalles/HeroDetalles'
import HeroHeader from './components/Header/HeroHeader'
import MenuMobile from './components/Mobile/MenuMobile'
import HeroShop from './components/Shop/HeroShop'
import { SearchProvider } from './SearchContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (

    <SearchProvider>

      <BrowserRouter>

        <MenuMobile />
        <HeroShop />
        <Routes>
          <Route path='/' element={<HeroHeader />} />
          <Route path='/detalle/:id' element={<HeroDetalles />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  )
}

export default App
