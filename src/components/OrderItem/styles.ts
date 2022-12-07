import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.688rem;
`

export const SelectedCoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    color: ${props => props.theme['base-text']};
  }
`

export const SelectedCoffeeInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  width: 10.688rem;
  height: 3.813rem;

  font-size: 1rem;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
`

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CounterAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2rem;

  background: ${props => props.theme['base-button']};

  border-radius: 6px;

  svg:hover {
    cursor: pointer;
  }

`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;

  width: 5.688rem;
  height: 2rem;

  background: ${props => props.theme['base-button']};
  outline: none;
  border: none;
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`

export const Divider = styled.div`
  width: 23rem;
  height: 0px;

  border: 1px solid ${props => props.theme['base-button']};

`