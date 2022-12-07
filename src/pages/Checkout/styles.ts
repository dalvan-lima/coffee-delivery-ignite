import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 2rem 10rem;
`;

export const Header = styled.header`
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
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: #EBE5F9;
  color: #4B2995;
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



export const CheckoutContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  /* width: 70rem; */
  gap: 2rem;
`

export const TitleCheckoutFrame = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  
  width: 40rem;
  height: 36.938rem;
`
export const SelectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.938rem;
  
  width: 28rem;
  height: 31.125rem;
`

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  
  width: 100%;
  height: 23.25rem;

  background: ${props => props.theme['base-card']};
  border-radius: 6px;

  /* form {
    display: flex;
    flex-wrap: wrap;
    
    align-items: flex-start;
    row-gap: 1rem;
    column-gap: 0.75rem;

    width: 35rem;
  } */
`

export const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    align-items: flex-start;
    row-gap: 1rem;
    column-gap: 0.75rem;

    width: 35rem;
`

export const DescriptionAddressContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const DescriptionAddressContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;

  h1 {
    font-size: 1rem;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;

    color: ${props => props.theme['base-text']};
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  /* margin-bottom: 1rem; */

  width: ${props => props.width ? props.width : 'auto'};
  height: 2.625rem;

  background: ${props => props.theme['base-input']};

  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;

  &:focus:required:invalid { 
    border: 1px solid red;
    border-radius: 4px;
  }

  &:focus-within, &:focus:required:valid  {
    border: 1px solid ${props => props.theme['yellow-dark']};
    border-radius: 4px;
  }
`

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
`

export const InputSelect = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.167rem;
  height: 3.188rem;

  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${props => props.theme['base-text']};

  background: ${props => props.theme['base-button']};
  border: 1px solid ${props => props.theme['base-button']};

  border-radius: 6px;

  &.active {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple']};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(.active) {
    background: ${props => props.theme['base-hover']};
  }
`

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 28rem;
  /* height: 31.125rem; */

  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;

    margin-top: 1rem;

    width: 23rem;
    height: 2.875rem;

    background: ${props => props.theme['yellow']};
    border-style: none;
    border-radius: 6px;

    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${props => props.theme['white']};

    transition: 1s background;

    &:hover {
      cursor: pointer;
      background: ${props => props.theme['yellow-dark']};
    }
  }
`

export const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 23rem;
  height: 1.313rem;

  p {
    font-size: 0.875rem;
    line-height: 130%;
  }

  strong {
    font-size: 1.25rem;
  }
`