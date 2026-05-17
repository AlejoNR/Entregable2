import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterGrid from '../../components/CharacterGrid/CharacterGrid';
import PaginationControls from '../../components/PaginationControls/PaginationControls';
import './FilterPage.css';

const SPECIES_OPTIONS = [
  { value: '', label: 'Todas las especies' },
  { value: 'Human', label: 'Humano' },
  { value: 'Alien', label: 'Alien' },
  { value: 'Robot', label: 'Robot' },
  { value: 'Mythological Creature', label: 'Criatura Mitológica' },
  { value: 'Animal', label: 'Animal' },
  { value: 'Humanoid', label: 'Humanoide' },
  { value: 'Disease', label: 'Enfermedad' },
  { value: 'Cronenberg', label: 'Cronenberg' },
  { value: 'unknown', label: 'Desconocida' },
];

export default function FilterPage() {
  const [species, setSpecies] = useState('');
  const [page, setPage] = useState(1);

  const { characters, info, loading, error } = useCharacters({ page, species });

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
    setPage(1);
  };

  return (
    <Container maxWidth="xl" className="filter-page">
      <Box className="filter-page__header">
        <Typography variant="h4" className="filter-page__title">
          Filtrar por Especie
        </Typography>
        <Typography variant="body1" className="filter-page__subtitle">
          Selecciona una especie para filtrar los personajes
        </Typography>

        <FormControl className="filter-page__form-control">
          <InputLabel id="species-label" className="filter-page__input-label">
            Especie
          </InputLabel>
          <Select
            labelId="species-label"
            value={species}
            label="Especie"
            onChange={handleSpeciesChange}
            className="filter-page__select"
          >
            {SPECIES_OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
