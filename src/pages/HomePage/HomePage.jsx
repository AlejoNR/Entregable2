import { Container, Typography, Box, Rating, Card, CardMedia, CardContent } from '@mui/material';
import './HomePage.css';
import IMbdLogo from '../../assets/Icons/IMbdLogo.png'
import Tomatoes from '../../assets/Icons/RottenTomatoeslogo.png'
import Tomato from '../../assets/Icons/RottenTomatoes.png'
import Meta from '../../assets/Icons/MetacriticLogo.png'
import Watch from '../../assets/Icons/must-watch.png'
import Dan from '../../assets/Images/DanHarmon.jpg'
import Justin from '../../assets/Images/JustinRoiland.jpg'
import LogoSerie from '../../assets/Icons/Rick_and_Morty.png'

export default function HomePage() {
  return (

    <div id='Home'>
      <Container maxWidth="md" className="home-page">
        <Box className="home-page__content">
          <img src={LogoSerie} alt="" />
          <Typography variant="h5" className="home-page__subtitle">
            Rick Sánchez es la definición exacta de "científico loco". Es alcohólico, es un genio, es irresponsable y está loco. Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras para que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry, padre de Morty y yerno de Rick.
            <hr />
            Así, Rick y Morty comienzan a vivir aventuras intergalácticas a pesar de que la familia no quiere que lo sigan haciendo. Poco a poco tienen que intentar encontrar un equilibrio entre su vida familiar y sus viajes a través del espacio y por distintas realidades paralelas, algo que no es fácil para el pequeño Morty que es incapaz de tener una vida normal al margen de su abuelo.
          </Typography>
        </Box>
      </Container>


      <Typography variant="h2" className="home-page__title">
        Amada por la Critica
      </Typography>



      <Container maxWidth="md" className="home-page__rating">
        <div className='ratings'>
          <img src={IMbdLogo} alt="Logo de IMbd" />
          <Rating name="read-only" value={9} max={10} readOnly />
          <Typography variant="h5" className="home-page__subtitle">
            9.0<span className="text-secondary">/10</span>
          </Typography>
          <span className="text-secondary2">694k</span>
        </div>
        <div className='ratings'>
          <img src={Tomatoes} alt="Logo de rotten tomatoes" id='tomatoes' />
          <div id='ratingRoten'>
            <img src={Tomato} alt="Logo de tomate" id='Tomato' />
            <Typography variant="h5" className="home-page__subtitle">
              90%
            </Typography>
          </div>
          <span className="text-secondary2">Avg.tomatometer</span>
        </div>
        <div className='ratings' >
          <img src={Meta} alt="" id='Meta' />
          <div id='Metacritic'>
            <img src={Watch} alt="Logo de recomendacion" id='Watch' />
            <Typography variant="h5" className="home-page__subtitle">
              84
            </Typography>
          </div>
          <span className="text-secondary2">35 Critic Riviews</span>
        </div>
      </Container>

      <Typography variant="h2" className="home-page__title">
        Creadores
      </Typography>

      <Container maxWidth="md" className="home-page__creators">
        <Card className="creator-card">
          <CardMedia
            component="img"
            height="300"
            image={Justin}
            alt="Justin Roiland"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="creator-name">
              Justin Roiland
            </Typography>
            <Typography variant="body2" className="creator-desc">
              Co-creador y voz original de los personajes principales, Rick Sánchez y Morty Smith. Aportó gran parte del humor irreverente y la improvisación a la serie.
            </Typography>
          </CardContent>
        </Card>

        <Card className="creator-card">
          <CardMedia
            component="img"
            height="300"
            image={Dan}
            alt="Dan Harmon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="creator-name">
              Dan Harmon
            </Typography>
            <Typography variant="body2" className="creator-desc">
              Co-creador, escritor y productor, conocido también por crear la aclamada serie de comedia Community. Aportó la estructura narrativa y profundidad emocional.
            </Typography>
          </CardContent>
        </Card>
      </Container>

    </div>

  );
}
