import React from 'react';

// Material UI component imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Component imports
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';

// Styling config
const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

// Main post details
const mainFeaturedPost = {
  title: "Explore the incredible universe of Marvel",
  description: "Marvel Comics is known for creating notable super heroes such as Spider-Man, Iron Man, Captain America, Hulk, Thor, the Avengers, the X-Men and Deadpool. Its most well-known villains include Red Skull, Loki, Thanos, Ultron and Magneto.",
  image: 'https://wallpapercave.com/wp/dK7bcLd.jpg',
  imgText: 'Main image',
  linkText: 'Marvel Official Website',
};

// Chars post details
const charPost = {
  title: 'Characters',
  description: 'Learn the most interesting and creative lore about your favorite characters. Click to see all characters!',
  image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/00/6019700b57bf2/portrait_uncanny.jpg',
  imageText: 'Characters image',
};

// Comics post details
const comicPost = {
  title: 'Comics',
  description: "Get almost infinite fun with Marvel's thousands of comics. Click to see all comics!",
  image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_fantastic.jpg',
  imageText: 'Comics image',
};

const Blog = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Marvel Universe Visualization" />

        <main>
          <MainFeaturedPost post={ mainFeaturedPost } />

          <Grid container spacing={4}>
            
            {/* Chars post */}
            <Grid item xs={12} md={6}>
              <CardActionArea component="a" href="/characters">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {charPost.title}
                      </Typography>

                      <Typography variant="subtitle1" color="textSecondary">
                        {charPost.date}
                      </Typography>

                      <Typography variant="subtitle1" paragraph>
                        {charPost.description}
                      </Typography>
                    </CardContent>
                  </div>

                  <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={charPost.image} title={charPost.imageTitle} />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>

            {/* Comics post */}
            <Grid item xs={12} md={6}>
              <CardActionArea component="a" href="/comics">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {comicPost.title}
                      </Typography>

                      <Typography variant="subtitle1" color="textSecondary">
                        {comicPost.date}
                      </Typography>

                      <Typography variant="subtitle1" paragraph>
                        {comicPost.description}
                      </Typography>
                    </CardContent>
                  </div>

                  <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={comicPost.image} title={comicPost.imageTitle} />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          
          </Grid>
        </main>
      </Container>

      <Footer title="Marvel Data Visualization" description="An app made to visualize Marvel's universe"/>
    </React.Fragment>
  );
};

export default Blog;