import './App.css';
import Header from './components/header';
import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

export default App;
