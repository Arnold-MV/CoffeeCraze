import React, { useEffect, useState } from 'react'
import ProductoDestalles from './ProductoDestalles'

import { useSearchContext } from '../../SearchContext'
import { useParams } from 'react-router-dom'

const HeroDetalles = () => {
  const { pedirItemPorId } = useSearchContext()
  const [item, setItem] = useState(null)

  const id = useParams().id

  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((res) => {
        setItem(res)
      })
  }, [id])

  return (
    <>
      {item && <ProductoDestalles item={item} />}
    </>
  )
}

export default HeroDetalles
