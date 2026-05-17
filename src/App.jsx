import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import FilterPage from './pages/FilterPage/FilterPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import theme from './theme';
import './App.css'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/character/:id" element={<CharacterDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
