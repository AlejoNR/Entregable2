import { Box, Typography } from '@mui/material';
import './CharacterNotFound.css';

export default function CharacterNotFound() {
  return (
    <Box className="character-not-found">
      <Box className="character-not-found__background" />
      
      <Box className="character-not-found__footer">
        <Typography variant="body1" className="character-not-found__text">
          Ups... Este personaje no existe en el multiverso
        </Typography>
      </Box>
    </Box>
  );
}
