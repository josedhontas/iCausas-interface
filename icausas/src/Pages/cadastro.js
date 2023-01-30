import { Avatar, Grid, Paper, TextField } from '@material-ui/core'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';




export default function Cadastro() {
    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "70px auto" }
    const btnstyle = { margin: '8px 0' }
    const marginTop = { marginTop: 5 }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>             <Avatar><LockIcon /></Avatar>
                    <h2>iCausas</h2>
                </Grid>
                <TextField label='Nome' fullWidth required></TextField>
                <TextField label='Email' fullWidth required></TextField>
                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Genero</FormLabel>
                    <RadioGroup aria-label="genero" name="genero" style={{ display: 'initial' }}>
                        <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                        <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                    </RadioGroup>
                </FormControl>
                <TextField label='Senha' type='password' fullWidth required></TextField>
                <TextField label='Confirme sua senha' type='password' fullWidth required></TextField>

                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Eu aceito os termos e condições" />

                    <Button type='submit' variant='contained' style={btnstyle}>
                        Cadastrar
                    </Button>
                </FormGroup>
                
            </Paper>
        </Grid>
    )
}
