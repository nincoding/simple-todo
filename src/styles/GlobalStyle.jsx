import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  body {
    font-family: 'Jalnan';
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  #root {
    background-color: white;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  }
  .App {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #f2f2f2;
    @media screen and (min-width: 650px) {
      width: 640px;
    }
    @media screen and (max-width: 650px) {
      width: 90vw;
    }
  }
  .imgWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 25%;
    > p {
      color: #303030;
      font-size: 18px;
    }
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    opacity: 80%;
  }
`;

export default GlobalStyle;