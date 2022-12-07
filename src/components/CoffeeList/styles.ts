import styled from "styled-components";


export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 2rem;

    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem 1rem;
  /* grid-row-gap: 2rem;
  grid-column-gap: 0.15rem; */

  margin-top: 3.375rem;
`