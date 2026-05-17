import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ImagenError from '../../assets/Images/ImagenError.png'
import './ErrorPage.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div id='ErrorPa'>
      <Container maxWidth="sm" className="error-page">
        <Box>
          <Typography variant="h1" className="error-page__code">
            404
          </Typography>
          <div id='Error'>
            <img src={ImagenError} alt="Imagen de error 404" />
          </div>
          <Box className='error-page__container'>
            <Typography variant="h5" className="error-page__title">
              Dimensión no encontrada
            </Typography>
            <Typography variant="body1" className="error-page__description">
              Parece que te perdiste en el multiverso. Esta página no existe.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>

  );
}
