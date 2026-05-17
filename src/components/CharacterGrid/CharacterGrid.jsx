import { Grid, Skeleton, Card, Box, Alert } from '@mui/material';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterGrid.css';

function SkeletonCard() {
  return (
    <Card className="skeleton-card">
      <Skeleton variant="rectangular" className="skeleton-card__image" />
      <Box className="skeleton-card__content">
        <Skeleton variant="text" className="skeleton-card__title" />
        <Skeleton variant="text" className="skeleton-card__line1" />
        <Skeleton variant="text" className="skeleton-card__line2" />
      </Box>
    </Card>
  );
}

export default function CharacterGrid({ characters, loading, error }) {
  if (error) {
    return (
      <Alert severity="error" className="character-grid__error">
        {error}
      </Alert>
    );
  }

  if (!loading && characters.length === 0) {
    return (
      <Alert severity="info" className="character-grid__empty">
        No se encontraron personajes con esa especie.
      </Alert>
    );
  }

  return (
    <Grid container spacing={2}>
      {loading
        ? Array.from({ length: 20 }).map((_, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <SkeletonCard />
            </Grid>
          ))
        : characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
              <CharacterCard character={character} />
            </Grid>
          ))}
    </Grid>
  );
}
