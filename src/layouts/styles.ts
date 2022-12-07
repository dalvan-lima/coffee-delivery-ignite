import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 2rem 5rem;
  /* width: 70rem; */
  
  
  /* @media only screen and (max-width: 1440px) {
    max-width: 70rem;
  } */

  /* @media only screen and (min-width: 1440px) {
    padding: 2rem 10rem;
  } */
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  a {
    position: relative;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      right: -0.522rem;
      top: -0.5rem;

      font-family: 'Roboto', sans-serif;
      font-style: normal;
      text-align: center;
      letter-spacing: -0.06em;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 130%;
      color: ${props => props.theme.white};

      background: ${props => props.theme['yellow-dark']};
      border-radius: 1000px;
    }
  }
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};
  border-radius: 6px;
`

export const ShoppingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
`

export const ShoppingCartContainerHeader = styled(ShoppingCartContainer)`
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow']};
`