import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5',
    maxWidth: 360,
    margin: 'auto',
    height: '80vh', // altura reduzida
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(3),
  },
  subtitle: {
    color: '#9e9e9e',
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: '#212121',
    color: 'white',
    marginTop: theme.spacing(3),
    '&:hover': {
      backgroundColor: '#424242',
    },
  },
}));

function Login() {
  const classes = useStyles();

  const handleGoogleLogin = () => {
    // Adicione aqui a lógica para iniciar o processo de autenticação do Google
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        iCausas
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Faça login com sua conta Google
      </Typography>
      <Button
        variant="contained"
        size="large"
        fullWidth
        className={classes.button}
        onClick={handleGoogleLogin}
      >
        Login com Google
      </Button>
    </Box>
  );
}

export default Login;
