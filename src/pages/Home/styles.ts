import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 10rem;

  img {
    flex: 1;
    height: 100%;
  }
`

export const Description = styled.div`
  flex: 1;
  display: flex;
  width: 36.75rem;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${props => props.theme['base-title']}
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  margin-top: 4.125rem;
  margin-bottom: 6.75rem;
`

export const ItemIntro = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;

  span {
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    line-height: 130%;
  }
`

export const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};

  border-radius: 1000px;
  padding: 0.5rem;
`