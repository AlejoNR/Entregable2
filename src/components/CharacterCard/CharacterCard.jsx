import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Box,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './CharacterCard.css';

const statusColors = {
  Alive: '#69ff47',
  Dead: '#ff4444',
  unknown: '#aaaaaa',
};

const genderLabel = {
  Male: 'Masculino',
  Female: 'Femenino',
  Genderless: 'Sin género',
  unknown: 'Desconocido',
};

export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  const statusColor = statusColors[character.status] || '#aaaaaa';

  return (
    <Card className="character-card">
      <CardActionArea
        onClick={() => navigate(`/character/${character.id}`)}
        className="character-card__action-area"
      >
        <Box className="character-card__image-wrapper">
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            className="character-card__image"
          />
          <Chip
            label={character.species}
            size="small"
            className="character-card__species-chip"
          />
        </Box>

        <CardContent className="character-card__content">
          <Typography
            variant="h6"
            gutterBottom
            className="character-card__name"
          >
            {character.name}
          </Typography>

          <Stack spacing={0.5}>
            <Box className="character-card__status-row">
              <FiberManualRecordIcon
                className="character-card__status-icon"
                style={{ color: statusColor }}
              />
              <Typography variant="body2" className="character-card__status-text">
                {character.status}
              </Typography>
            </Box>
            <Typography variant="body2" className="character-card__gender-text">
              Género: {genderLabel[character.gender] || character.gender}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
