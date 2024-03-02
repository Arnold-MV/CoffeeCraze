import { RiHeart2Fill, RiShoppingBagFill } from 'react-icons/ri'
import { useSearchContext } from '../../SearchContext'

const MenuHeader = () => {
  const { setShop } = useSearchContext()
  return (
    <ul className='items-center hidden gap-8 text-3xl  text-color3 lg:flex'>
      <li className='transition-all hover:text-caramelo '><button onClick={() => setShop(true)}><RiShoppingBagFill /></button></li>
      <li className='transition-all hover:text-caramelo '><button><RiHeart2Fill /></button></li>
    </ul>
  )
}

export default MenuHeader
