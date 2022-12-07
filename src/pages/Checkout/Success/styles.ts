import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${props => props.theme['yellow-dark']};
  }

  p {
    font-size: 20px;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
  }
`


export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 30.75rem;
    height: 18.313rem;
  }
`

export const InfoDelivery = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 32.875rem;
  /* height: 270px; */

  border-radius: 6px 36px;
`

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1rem;
      line-height: 130%;

      color: ${props => props.theme['base-text']};
      
      strong {
        font-weight: 600;
        color: ${props => props.theme['base-title']};

      }
    }
  }
  `

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 2rem;
  
  color: ${props => props.theme['white']};
  padding: 0.5rem;
  background: ${props => props.color};
  border-radius: 1000px;
`