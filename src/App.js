import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from './style';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        App
      </div>
    </ThemeProvider>
  );
}
