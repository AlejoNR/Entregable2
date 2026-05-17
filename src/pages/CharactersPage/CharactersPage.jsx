import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterGrid from '../../components/CharacterGrid/CharacterGrid';
import PaginationControls from '../../components/PaginationControls/PaginationControls';
import './CharactersPage.css';

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const { characters, info, loading, error } = useCharacters({ page });

  return (
    <Container maxWidth="xl" className="characters-page">
      <Box className="characters-page__header">
        <Typography variant="h4" className="characters-page__title">
          Todos los Personajes
        </Typography>
        <Typography variant="body1" className="characters-page__subtitle">
          Explora el universo de Rick and Morty
        </Typography>
      </Box>

      <CharacterGrid characters={characters} loading={loading} error={error} />

      <PaginationControls
        info={info}
        page={page}
        onPageChange={(newPage) => {
          setPage(newPage);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </Container>
  );
}
