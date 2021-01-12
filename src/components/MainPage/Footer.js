import React from 'react';
import PropTypes from 'prop-types';

// Material UI component imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright () {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Container color="inherit">
        Developed by Eric

        <div style={{ marginTop: 10 }}>
          <GitHubIcon onClick={ () => window.location.href='https://github.com/Eric-Souza' } cursor='pointer' />
          {' '}
          <LinkedInIcon onClick={ () => window.location.href='https://www.linkedin.com/in/eric-de-oliveira-souza-0157b618b/?locale=en_US' } cursor='pointer' />
        </div>
      </Container>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          { title }
        </Typography>

        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          { description }
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};