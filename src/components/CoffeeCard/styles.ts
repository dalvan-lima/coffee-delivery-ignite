import styled from "styled-components";


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  text-align: center;

  background-color: ${props => props.theme['base-card']};

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${props => props.theme['base-title']};
  }

  p {
    margin-top: 0.5rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    font-size: 0.875rem;
    line-height: 130%;

    text-align: center;

    color: ${props => props.theme['base-label']};
  }
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const Tag = styled.span`
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;

    color: ${props => props.theme['yellow-dark']};

    margin-top: 0.75rem;
    height: 1.313rem;

    padding: 0.25rem 0.5rem;

    background: ${props => props.theme['yellow-light']};

    border-radius: 100px;
`

export const BuyContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  height: 2.375rem;

  margin: 1.25rem 1.5rem;
`

export const PriceBuyCard = styled.div`
    display: inline;
    margin-top: 0.219rem;
    margin-bottom: 0.219rem;

    span {
      font-size: 0.875rem;
      line-height: 130%;
      text-align: right;
      color: ${props => props.theme['base-label']}
    }

    strong {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.25rem;
    }
`

export const ActionsBuyCardContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CounterAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2.375rem;

  background: ${props => props.theme['base-button']};

  border-radius: 6px;

  svg {
    &:hover {
      cursor: pointer;
    }
  }

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

  &:hover {
    cursor: pointer;
  }
`

export const ShoppingCartContainerActionBuy = styled(ShoppingCartContainer)`
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};
`