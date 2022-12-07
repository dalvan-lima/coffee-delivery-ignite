import { Minus, Plus, Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { CoffeeInOrder, OrderContext } from '../../contexts/OrderContext'

import { Container, CounterAction, Divider, ItemActions, RemoveButton, SelectedCoffee, SelectedCoffeeInfo, SelectedCoffeeInfoDetails } from './styles'

interface OrderItemProps {
  coffee: CoffeeInOrder
}

export function OrderItem({ coffee }: OrderItemProps) {
  const { removeCoffeeFromCart, increaseAmountOfCoffeeInCart, decreaseAmountOfCoffeeInCart } = useContext(OrderContext)

  const { img, name, price, quantity } = coffee

  const toBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleRemoveFromOrder() {
    removeCoffeeFromCart(name)
  }

  function handleIncreaseQuantity() {
    increaseAmountOfCoffeeInCart(name)
  }

  function handleDecreaseQuantity() {
    decreaseAmountOfCoffeeInCart(name)
  }

  return (
    <Container>
      <SelectedCoffeeInfo key={name}>
        <img src={img} alt="" />
        <SelectedCoffeeInfoDetails>
          <p>{name}</p>
          <ItemActions>
            <CounterAction>
              <Minus onClick={handleDecreaseQuantity} color='#4B2995' fontWeight='700' />
              {quantity}
              <Plus onClick={handleIncreaseQuantity} color='#4B2995' fontWeight='700' />
            </CounterAction>
            <RemoveButton onClick={handleRemoveFromOrder}>
              <Trash color='#4B2995' />
              REMOVER
            </RemoveButton>
          </ItemActions>
        </SelectedCoffeeInfoDetails>

        <span>{toBRL.format(price)}</span>
      </SelectedCoffeeInfo>

      <Divider />
    </Container>
  )
}
