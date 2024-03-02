import Affogato from '../assets/img/Affogato.webp'
import CaféAmericano from '../assets/img/CaféAmericano.webp'
import CaféDescafeinado from '../assets/img/CaféDescafeinado.webp'
import CaféFrappé from '../assets/img/CaféFrappé.webp'
import CaféIrish from '../assets/img/CaféIrish.webp'
import CaféLatte from '../assets/img/CaféLatte.webp'
import CaféLecheFrío from '../assets/img/CaféLecheFrío.webp'
import CaféMocha from '../assets/img/CaféMocha.webp'
import CaféSoya from '../assets/img/CaféSoya.webp'
import CaféVienés from '../assets/img/CaféVienés.webp'
import Cappuccino from '../assets/img/Cappuccino.webp'
import EspressoClásico from '../assets/img/EspressoClásico.webp'
import EspressoDoble from '../assets/img/EspressoDoble.webp'
import EspressoMacchiato from '../assets/img/EspressoMacchiato.webp'
import IcedCoffee from '../assets/img/IcedCoffee.webp'

export const cafes = [
  {
    id: 1,
    nombre: 'Espresso Clásico',
    descripcion: 'Un tiro de espresso rico y fuerte.',
    precio: 8,
    categoria: 'Espresso',
    imagen: EspressoClásico,
    cantidad: 50
  },
  {
    id: 2,
    nombre: 'Espresso Doble',
    descripcion: 'Doble espresso para los amantes del café fuerte.',
    precio: 12,
    categoria: 'Espresso',
    imagen: EspressoDoble,
    cantidad: 30
  },
  {
    id: 3,
    nombre: 'Espresso Macchiato',
    descripcion: 'Espresso con una pizca de espuma de leche.',
    precio: 10,
    categoria: 'Espresso',
    imagen: EspressoMacchiato,
    cantidad: 40
  },
  {
    id: 4,
    nombre: 'Café Latte',
    descripcion: 'Espresso con leche al vapor y un toque de espuma.',
    precio: 12,
    categoria: 'Café con Leche',
    imagen: CaféLatte,
    cantidad: 60
  },
  {
    id: 5,
    nombre: 'Café Mocha',
    descripcion: 'Espresso con chocolate caliente y crema batida.',
    precio: 15,
    categoria: 'Café con Leche',
    imagen: CaféMocha,
    cantidad: 25
  },
  {
    id: 6,
    nombre: 'Cappuccino',
    descripcion: 'Tres partes iguales de espresso, leche y espuma de leche.',
    precio: 13,
    categoria: 'Café con Leche',
    imagen: Cappuccino,
    cantidad: 35
  },
  {
    id: 7,
    nombre: 'Café Frappé',
    descripcion: 'Espresso mezclado con hielo y crema batida.',
    precio: 18,
    categoria: 'Café Frío',
    imagen: CaféFrappé,
    cantidad: 45
  },
  {
    id: 8,
    nombre: 'Iced Coffee',
    descripcion: 'Café fuerte servido con hielo.',
    precio: 10,
    categoria: 'Café Frío',
    imagen: IcedCoffee,
    cantidad: 55
  },
  {
    id: 9,
    nombre: 'Café con Leche Frío',
    descripcion: 'Café helado con leche y jarabe.',
    precio: 14,
    categoria: 'Café Frío',
    imagen: CaféLecheFrío,
    cantidad: 42
  },
  {
    id: 10,
    nombre: 'Café Vienés',
    descripcion: 'Café con nata montada y chocolate rallado.',
    precio: 16,
    categoria: 'Cafés Especiales',
    imagen: CaféVienés,
    cantidad: 28
  },
  {
    id: 11,
    nombre: 'Affogato',
    descripcion: 'Helado de vainilla cubierto con un tiro de espresso.',
    precio: 20,
    categoria: 'Cafés Especiales',
    imagen: Affogato,
    cantidad: 38
  },
  {
    id: 12,
    nombre: 'Café Irish',
    descripcion: 'Café con whisky, crema batida y azúcar.',
    precio: 25,
    categoria: 'Cafés Especiales',
    imagen: CaféIrish,
    cantidad: 20
  },
  {
    id: 13,
    nombre: 'Café Descafeinado',
    descripcion: 'Espresso sin cafeína.',
    precio: 10,
    categoria: 'Opciones Saludables',
    imagen: CaféDescafeinado,
    cantidad: 50
  },
  {
    id: 14,
    nombre: 'Café Americano',
    descripcion: 'Espresso diluido con agua caliente.',
    precio: 10,
    categoria: 'Opciones Saludables',
    imagen: CaféAmericano,
    cantidad: 60
  },
  {
    id: 15,
    nombre: 'Café de Soya',
    descripcion: 'Café con leche de soya.',
    precio: 13,
    categoria: 'Opciones Saludables',
    imagen: CaféSoya,
    cantidad: 30
  }
]
