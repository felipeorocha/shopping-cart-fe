import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920;
    -webkit-font-font-smoothing: antialiased;

    &::before {
      content: '';
      background: #151223;
      height: 600px;
      width: 100%;
      position: absolute;
      transform-origin: top left;
      transform: skewY(-10deg);
    }
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    position: relative;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;
