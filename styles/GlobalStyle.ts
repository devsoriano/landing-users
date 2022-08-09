import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  main, header, footer {
    max-inline-size: 1248px;
    margin: auto;
    padding: 0 20px;
  }

  .sidebar {
    background-color: white;
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    overflow-y: scroll;
  }

  .overlay {
    background-color: rgba(0,0,0,.7);
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;  
  }

  @media (max-width: 760px) {
    .sidebar {
      width: 100%;
    }
  }
`;
