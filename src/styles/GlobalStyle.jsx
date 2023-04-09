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
    background-color: ${({ theme }) => theme.bodyBackgroundColor };
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
  }
  #root {
    position: relative;
    min-height: 100%;
    background-color: white;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  }
  .App {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.appBackgroundColor };
    @media screen and (min-width: 650px) {
      width: 640px;
    }
    @media screen and (max-width: 650px) {
      width: 100vw;
    }
    @media screen and (max-width: 412px) {
      width: 100vw;
    }
  }
  .imgWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 10vh;
    @media screen and (max-width: 650px) {
      gap: 25px;
    }
    @media screen and (max-width: 412px) {
      gap: 50px;
    }
    > p {
      color: ${({ theme }) => theme.imgTextColor };
      font-size: 18px;
    }
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    opacity: 80%;
    @media screen and (max-width: 650px) {
      width: 180px;
      height: 180px;
    }
    @media screen and (max-width: 412px) {
      width: 150px;
      height: 150px;
    }
  }
  .listWrapper {
    position: relative;
    max-height: 51vh; /* 화면에 보여질 최대 높이를 지정합니다. */
    overflow-y: auto; /* 스크롤 가능하도록 */
    -webkit-overflow-scrolling: touch; /* iOS에서 스크롤 성능 최적화 */
    @media screen and (max-width: 650px) {
      max-height: 60vh;
      min-height: 35vh;
    }
    @media screen and (max-width: 412px) {
      max-height: 55vh;
      min-height: 35vh;
    }
  }
`;

export default GlobalStyle;