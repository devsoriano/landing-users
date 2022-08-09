import styled from "styled-components";

export const Section = styled.section`
  background-color: ${(props) => `${props.theme.colors.lightBlue}`};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 350px);
  height: 100vh;
`;

export const Welcome = styled.div`
  color: ${(props) => `${props.theme.colors.white}`};
  font-size: ${(props) => `${props.theme.fontSizes.large}`};
  margin-bottom: 20px;
`;

export const Container = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  border: ${(props) => `2px solid ${props.theme.colors.grey}`};
  border-radius: 6px;
  box-shadow: 0 7px 14x rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
  width: 400px;

  @media (max-width: 400px) {
    width: auto;
  }
`;
