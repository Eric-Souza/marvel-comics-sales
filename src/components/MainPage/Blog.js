import React from 'react';

// Material UI component imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Component imports
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

const mainFeaturedPost = {
  title: "Explore the incredible universe of Marvel",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Marvel Official Website',
};

const featuredPosts = [
  {
    title: 'Characters',
    description:
      'Learn the most interesting and creative lore about your favorite characters.',
    image: "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_fantastic.jpg",
    imageText: 'Image Text',
  },
  {
    title: 'Comics',
    description:
      "Get almost infinite fun with Marvel's thousands of comics.",
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const Blog = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Marvel Data Visualization" />

        <main>
          <MainFeaturedPost post={ mainFeaturedPost } />

          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={ post.title } post={ post } />
            ))}
          </Grid>
        </main>
      </Container>

      <Footer title="Marvel Data Visualization" description="A simple app made to visualize Marvel's universe"/>
    </React.Fragment>
  );
};

export default Blog;