import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './style';

import AppRouter from './Router';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}
