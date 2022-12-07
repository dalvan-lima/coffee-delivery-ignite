import introImg from '../../assets/intro-img.png'
import expressoTradicional from '../../assets/cafe-exp-tradicional.svg'

import { MapPin, Minus, Plus, ShoppingCart } from 'phosphor-react'

import { Description, IconCircle, IntroContainer, IntroItemsContainer, ItemIntro } from './styles'
import { useTheme } from 'styled-components'
import { CoffeeList } from '../../components/CoffeeList'

export function Home() {
  const theme = useTheme() as any
  return (
    <>
      <IntroContainer>
        <Description>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <IntroItemsContainer>
            <ItemIntro>
              <IconCircle color={theme['yellow-dark']}>
                <ShoppingCart size={24} weight='fill' />
              </IconCircle>
              <span>Compra simples e segura</span>
            </ItemIntro>
            <ItemIntro>
              <IconCircle color={theme['base-text']}>
                <ShoppingCart size={24} weight='fill' />
              </IconCircle>
              <span>Compra simples e segura</span>
            </ItemIntro>
            <ItemIntro>
              <IconCircle color={theme['yellow']}>
                <ShoppingCart size={24} weight='fill' />
              </IconCircle>
              <span>Compra simples e segura</span>
            </ItemIntro>
            <ItemIntro>
              <IconCircle color={theme['purple']}>
                <ShoppingCart size={24} weight='fill' />
              </IconCircle>
              <span>Compra simples e segura</span>
            </ItemIntro>
          </IntroItemsContainer>
        </Description>

        <img src={introImg} alt="" />
      </IntroContainer>

      <CoffeeList />
    </>
  )
}
