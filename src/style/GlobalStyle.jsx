import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: 1.3; 
    -webkit-text-size-adjust: 100%;
  }

  *, *::before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    max-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  input {
    font-family: 'Noto Sans KR', sans-serif;
  }

  textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }

  input::-webkit-input-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  input::-moz-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  input:-ms-input-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  input:-moz-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  input::placeholder { font-family: 'Noto Sans KR', sans-serif; }

  textarea::-webkit-input-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  textarea::-moz-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  textarea:-ms-input-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  textarea:-moz-placeholder { font-family: 'Noto Sans KR', sans-serif; }
  textarea::placeholder { font-family: 'Noto Sans KR', sans-serif; }
`;
