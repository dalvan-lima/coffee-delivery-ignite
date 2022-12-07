import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { ListContainer, ListCard } from './styles'

import { useContext, useEffect, useState } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { OrderContext } from '../../contexts/OrderContext'

import expTradicional from '../../assets/cafe-exp-tradicional.svg'
import expAmericano from '../../assets/cafe-exp-americano.svg'
import expCremoso from '../../assets/cafe-exp-cremoso.svg'
import expGelado from '../../assets/cafe-exp-gelado.svg'
import cafeComLeite from '../../assets/cafe-com-leite.svg'
import latte from '../../assets/cafe-latte.svg'
import capuccino from '../../assets/cafe-capuccino.svg'
import macchiato from '../../assets/cafe-macchiato.svg'
import mocaccino from '../../assets/cafe-mocaccino.svg'
import chocoQuente from '../../assets/choco-quente.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'


interface CartItem {
  name?: string
  price?: number
  qtt?: number
  img?: string
}

export interface ICoffee {
  name: string
  description: string
  price: number
  qtt: number
  img: string
  tags: string[]
}

const coffees = [
  {
    name: 'Expresso Tradicional',
    price: 9.90,
    img: expTradicional,
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: [
      'tradicional'
    ],
    qtt: 0
  },
  {
    name: 'Expresso Americano',
    price: 9.90,
    img: expAmericano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: [
      'tradicional'
    ],
    qtt: 0
  },
  {
    name: 'Expresso Cremoso',
    price: 9.90,
    img: expCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: [
      'tradicional'
    ],
    qtt: 0
  },
  {
    name: 'Expresso Gelado',
    price: 9.90,
    img: expGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: [
      'tradicional',
      'gelado'
    ],
    qtt: 0
  },
  {
    name: 'Café com Leite',
    price: 9.90,
    img: cafeComLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: [
      'tradicional',
      'com leite'
    ],
    qtt: 0
  },
  {
    name: 'Latte',
    price: 9.90,
    img: latte,
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: [
      'tradicional',
      'com leite'
    ],
    qtt: 0
  },
  {
    name: 'Capuccino',
    price: 9.90,
    img: capuccino,
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: [
      'tradicional',
      'com leite'
    ],
    qtt: 0
  },
  {
    name: 'Macchiato',
    price: 9.90,
    img: macchiato,
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: [
      'tradicional',
      'com leite'
    ],
    qtt: 0
  },
  {
    name: 'Mocaccino',
    price: 9.90,
    img: mocaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: [
      'tradicional',
      'com leite'
    ],
    qtt: 0
  },
  {
    name: 'Chocolate Quente',
    price: 9.90,
    img: chocoQuente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: [
      'especial',
      'com leite'
    ],
    qtt: 0
  },
  {
    name: 'Cubano',
    price: 9.90,
    img: cubano,
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: [
      'especial',
      'alcoólico',
      'gelado'
    ],
    qtt: 0
  },
  {
    name: 'Havaiano',
    price: 9.90,
    img: havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: [
      'especial',
    ],
    qtt: 0
  },
  {
    name: 'Árabe',
    price: 9.90,
    img: arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: [
      'especial',
    ],
    qtt: 0
  },
  {
    name: 'Irlandês',
    price: 9.90,
    img: irlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: [
      'especial',
      'alcoólico'
    ],
    qtt: 0
  },
]

export function CoffeeList() {
  const { order } = useContext(OrderContext)

  console.log(order)

  const [cart, setCart] = useState<CartItem[]>([])

  return (
    <ListContainer>
      <h1>Nossos cafés</h1>

      <ListCard>
        {
          coffees.map(coffee => (
            <CoffeeCard key={coffee.name} coffee={coffee}  />
          )
          )
        }
      </ListCard>
    </ListContainer>
  )
}
