import { Avatar, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';




export default function Login() {
  const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "70px auto"}
  const btnstyle={margin:'8px 0'}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>             <Avatar><LockIcon/></Avatar>
          <h2>iCausas</h2>
        </Grid>
        <TextField label='Email' placeholder='Enter username' fullWidth required></TextField>
        <TextField label='Senha' placeholder='Enter password' type='password' fullWidth required></TextField>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Manter conectado" />
          <Button type='submit' variant='contained' style={btnstyle}>
            Entrar
          </Button>
        </FormGroup>
        <Typography align='left'>
          <Link href='#'>
            Esqueceu a senha?
          </Link>
        </Typography>
        <Typography align='left'>
          Novo por aqui? 
          <Link href='#'>
            Criar conta
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}
