import styled from "styled-components";

export const Container = styled.div`
  margin: 24px;
  width: 100%;
`;

export const Indicative = styled.div`
  color: ${(props) => `${props.theme.colors.darkBlue}`};
  text-decoration: ${(props) => `underline ${props.theme.colors.darkBlue}`};
  cursor: pointer;
  font-weight: 600;
`;

export const Header = styled.header`
  background-color: ${(props) => `${props.theme.colors.grey}`};
  padding: 20px;
`;

export const Footer = styled.footer`
  background-color: ${(props) => `${props.theme.colors.lightBlue}`};
  border-top: ${(props) => `20px solid ${props.theme.colors.darkBlue}`};
  height: 60px;
`;

export const Hr = styled.div`
  margin: 25px 0;
  height: 2px;
  background-color: ${(props) => `${props.theme.colors.grey}`};
`;

export const Photo = styled.span``;

export const Icon = styled.div`
  margin: 15px 0 20px 0;
`;
