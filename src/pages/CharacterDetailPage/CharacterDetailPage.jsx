import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  CircularProgress,
  Alert,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { fetchCharacterById } from '../../hooks/useCharacters';
import CharacterNotFound from '../CharacterNotFound/CharacterNotFound';
import './CharacterDetailPage.css';
import Meeseeks from '../../assets/Images/Mr.Meeseeks.png'

const statusColors = {
  Alive: '#69ff47',
  Dead: '#ff4444',
  unknown: '#aaaaaa',
};

const funFacts = [
  "Rick y Morty se originó como una parodia animada de Regreso al Futuro llamada 'The Real Animated Adventures of Doc and Mharti'.",
  "La voz de Rick y Morty en inglés originalmente la hacía la misma persona: Justin Roiland.",
  "El eructo constante de Rick era real, pero Justin Roiland tuvo problemas estomacales por forzarlo al grabar.",
  "El tema musical de la serie está inspirado en la música de Doctor Who y Farscape.",
  "La salsa Szechuan de McDonald's regresó a la vida real gracias a una broma en la serie.",
  "El diseño de la nave espacial de Rick está hecho de basura que encontró en el garaje.",
  "Dan Harmon y Justin Roiland vendieron la idea de la serie a Adult Swim casi sin guion.",
  "La dimensión original de Morty quedó destruida por una poción creada por Rick. Desde entonces, el Morty que seguimos vive en una realidad que no es la suya.",
  "Rick C-137 probablemente no sea el Rick más inteligente del multiverso… solo el más peligroso y emocionalmente roto.",
  "La Ciudadela de los Ricks empezó como una simple broma de ciencia ficción y terminó convirtiéndose en una crítica política y social completa.",
  "El episodio 'Pickle Rick' ganó un Emmy, aunque muchos fans pensaban que era solo un episodio absurdo sobre un pepinillo armado.",
  "Mr. Meeseeks fue creado porque Justin Roiland frustraba a los escritores con una voz molesta."
];

const InfoRow = ({ label, value }) => (
  <Box className="detail-page__info-row">
    <Typography variant="body2" className="detail-page__info-label">
      {label}
    </Typography>
    <Typography variant="body2" className="detail-page__info-value">
      {value}
    </Typography>
  </Box>
);

export default function CharacterDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setRandomFact(fact);

    setLoading(true);
    setError(null);
    fetchCharacterById(id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box className="detail-page__loading">
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  if (error) {
    return <CharacterNotFound />;
  }

  const statusColor = statusColors[character.status] || '#aaaaaa';

  return (
    <>
      <Container maxWidth="md" className="detail-page">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="outlined"
          color="primary"
          className="detail-page__back-btn"
        >
          Volver
        </Button>

        <Paper elevation={0} className="detail-page__card">
          <Grid container>
            <Grid item xs={12} sm={5}>
              <Box
                component="img"
                src={character.image}
                alt={character.name}
                className="detail-page__image"
              />
            </Grid>

            <Grid item xs={12} sm={7}>
              <Box className="detail-page__info">
                <Stack direction="row" alignItems="center" gap={1} className="detail-page__status-row">
                  <FiberManualRecordIcon
                    className="detail-page__status-icon"
                    style={{ color: statusColor }}
                  />
                  <Typography
                    variant="body2"
                    className="detail-page__status-text"
                    style={{ color: statusColor }}
                  >
                    {character.status}
                  </Typography>
                </Stack>

                <Typography variant="h4" className="detail-page__name">
                  {character.name}
                </Typography>

                <Chip
                  label={character.species}
                  color="primary"
                  variant="outlined"
                  size="small"
                  className="detail-page__species-chip"
                />

                <Divider className="detail-page__divider-main" />

                <InfoRow label="Género" value={character.gender} />
                <Divider className="detail-page__divider" />
                <InfoRow label="Origen" value={character.origin?.name} />
                <Divider className="detail-page__divider" />
                <InfoRow label="Ubicación actual" value={character.location?.name} />
                <Divider className="detail-page__divider" />
                <InfoRow
                  label="Episodios"
                  value={`Aparece en ${character.episode?.length} episodios`}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Box className="Seeks__Container">
        <Box className="Seeks__SpeechBubble">
          <Typography variant="body2" className="Seeks__Text">
            <b>¡Mírenme, soy Mr. Meeseeks!</b>
            ¿Sabías que...<br />
            {randomFact}
          </Typography>
        </Box>
        <Box className="Seeks__Image">
          <img src={Meeseeks} alt="Mr. Meeseeks" />
        </Box>
      </Box>
    </>
  );
}

