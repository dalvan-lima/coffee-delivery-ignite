import { MainContainer, Header, HeaderActionsContainer, Location, ShoppingCartContainerHeader, } from './styles'
import { NavLink, Outlet } from 'react-router-dom'

import logoCoffeeDelivery from '../assets/logo.png'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'


export function DefaultLayout() {
  const { order } = useContext(OrderContext)

  return (
    <MainContainer>
      <Header>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <HeaderActionsContainer>
          <Location>
            <MapPin size={24} weight='fill' />
            Porto Alegre, RS
          </Location>
          {/* <ShoppingCartContainerHeader> */}
          <NavLink to="/checkout" title="Order">
            <ShoppingCart size={24} weight='fill' />
            {
              order.length > 0 && <span>{order.length}</span>
            }
          </NavLink>
          {/* </ShoppingCartContainerHeader> */}
        </HeaderActionsContainer>
      </Header>

      <Outlet />

    </MainContainer>
  )
}
