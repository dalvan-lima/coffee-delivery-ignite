import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { ICoffee } from '../CoffeeList'

import { ActionsBuyCardContainer, BuyContainerCard, Card, CounterAction, PriceBuyCard, ShoppingCartContainer, ShoppingCartContainerActionBuy, Tag, TagList } from './styles'

interface CoffeeCardProps {
  coffee: ICoffee
}


export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { order, addCoffeeToCart } = useContext(OrderContext)

  const { name, price, img, qtt, description, tags } = coffee

  const [quantity, setQuantity] = useState<number>(0)



  useEffect(() => {
    const coffeeExistsInOrder = order.find(item => item.name === name )
    if(coffeeExistsInOrder) {
      setQuantity(coffeeExistsInOrder.quantity)
    } else {
      setQuantity(qtt)
    }
  }, [])

  function handleIncreaseQtt() {
    setQuantity((state: number) => state + 1)
  }

  function handleDecreaseQtt() {
    setQuantity((state: number) => state > 0 ? state - 1 : 0)
  }

  function handleAddToCart() {
    if (quantity > 0) {
      console.log('entrou aqui ', addCoffeeToCart)
      const coffeeToAddToCart = {
        name: coffee.name,
        price: coffee.price,
        quantity,
        img: coffee.img
      }
      addCoffeeToCart(coffeeToAddToCart)

      console.log(order)
    }
  }

  return (
    <Card>
      <img src={img} alt="" />
      <TagList>
        {
          tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))
        }
      </TagList>
      <h1>{name}</h1>

      <p>{description}</p>

      <BuyContainerCard>
        <PriceBuyCard><span>R$</span> <strong>9,90</strong></PriceBuyCard>
        <ActionsBuyCardContainer>
          <CounterAction>
            <Minus onClick={handleDecreaseQtt} color='#4B2995' fontWeight='700' />
            {quantity}
            <Plus onClick={handleIncreaseQtt} color='#4B2995' fontWeight='700' />
          </CounterAction>

          <ShoppingCartContainerActionBuy onClick={handleAddToCart}>
            <ShoppingCart onClick={handleAddToCart} weight='fill' />
          </ShoppingCartContainerActionBuy>
        </ActionsBuyCardContainer>
      </BuyContainerCard>
    </Card>
  )
}
