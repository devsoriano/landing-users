import styled from "styled-components";

export const Cards = styled.div`
  max-width: 1248px;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-repeat: no-repeat;
  background-size: auto;
  padding: 1rem;
  cursor: pointer;
  border: ${(props) => `2px solid ${props.theme.colors.darkBlue}`};
  border-radius: 6px;
  margin-bottom: 24px;
  text-align: center;
`;
