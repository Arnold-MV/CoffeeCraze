import React, { createContext, useContext, useState } from 'react'
import { cafes } from './data/data'

const SearchContext = createContext()

export const useSearchContext = () => {
  return useContext(SearchContext)
}

export const SearchProvider = ({ children }) => {
  const [nombreBuscado, setNombreBuscado] = useState('')
  const [shop, setShop] = useState(false)
  const [carrito, setCarrito] = useState([])

  const setSearch = (value) => {
    setNombreBuscado(value)
  }

  const agregarCarrito = (cafe) => {
    const cafeEnCarrito = carrito.find((item) => item.id === cafe.id)

    if (cafeEnCarrito) {
      if (cafeEnCarrito.cantidad < cafeEnCarrito.cantidadMaxima) {
        cafeEnCarrito.cantidad += 1
        // Crea una copia actualizada del carrito
        const carritoActualizado = [...carrito]
        // Encuentra el índice del café en la copia del carrito
        const index = carritoActualizado.findIndex((item) => item.id === cafe.id)
        // Actualiza el café en la copia del carrito
        carritoActualizado[index] = cafeEnCarrito
        // Actualiza el estado del carrito con la copia actualizada
        setCarrito(carritoActualizado)
      } else {
        alert('No hay suficiente stock de este café.')
      }
    } else {
      setCarrito([...carrito, { ...cafe, cantidad: 1, cantidadMaxima: cafe.cantidad }])
    }
  }

  const eliminarCarrito = (cafeId) => {
    const nuevoCarrito = carrito.filter((cafe) => cafe.id !== cafeId)
    setCarrito(nuevoCarrito)
  }

  const disminuirDelCarrito = (cafeId) => {
    const cafeEnCarrito = carrito.find((item) => item.id === cafeId)

    if (cafeEnCarrito) {
      if (cafeEnCarrito.cantidad > 1) {
        cafeEnCarrito.cantidad -= 1
        setCarrito([...carrito])
      } else {
        eliminarCarrito(cafeId)
      }
    }
  }

  // detalles pedir item
  const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
      const item = cafes.find((el) => el.id === id)

      if (item) {
        resolve(item)
      } else {
        reject(new Error('No se encontró el producto.'))
      }
    })
  }

  // Agrega esta función para calcular el costo total del carrito
  const calcularCostoTotal = () => {
    return carrito.reduce((total, cafe) => total + cafe.precio * cafe.cantidad, 0)
  }

  const actualizarCantidadYTotal = (cafeId, nuevaCantidad) => {
    const nuevoCarrito = carrito.map((cafe) => {
      if (cafe.id === cafeId) {
        cafe.cantidad = nuevaCantidad
      }
      return cafe
    })
    setCarrito(nuevoCarrito)
  }

  return (
    <SearchContext.Provider value={{ nombreBuscado, setSearch, shop, setShop, carrito, agregarCarrito, calcularCostoTotal, eliminarCarrito, disminuirDelCarrito, pedirItemPorId, actualizarCantidadYTotal }}>
      {children}
    </SearchContext.Provider>
  )
}
