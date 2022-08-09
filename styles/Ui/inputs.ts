import styled from "styled-components";

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.7);
  border: ${(props) => `2px solid ${props.theme.colors.grey}`};
  color: ${(props) => `${props.theme.colors.lightBlue}`};
  font-size: ${(props) => `${props.theme.fontSizes.small}`};
  height: 50px;
  margin-bottom: 20px;
  outline: none;
  padding: 0px 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => `${props.theme.colors.lightBlue}`};
  border: none;
  border-radius: 6px;
  color: ${(props) => `${props.theme.colors.white}`};
  cursor: pointer;
  font-size: ${(props) => `${props.theme.fontSizes.small}`};
  font-weight: 400;
  height: 50px;
  letter-spacing: 1px;
`;
