import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Select from '@mui/material/Select';

export default function GraficoDois() {
  const datax = [
    {
      "Ingressantes": 0,
      "Diplomados": 0,
      "PrimeiroSemestre": 0,
      "SegundoSemestre": 0,
      "TaxadeSucessoporAno": 0
    },
    {
      "Ingressantes": 0,
      "Diplomados": 0,
      "PrimeiroSemestre": 0,
      "SegundoSemestre": 0,
      "TaxadeSucessoporAno": 0
    },
    {
      "Ingressantes": 52,
      "Diplomados": 1,
      "PrimeiroSemestre": 1,
      "SegundoSemestre": 0,
      "TaxadeSucessoporAno": 1.92
    },
    {
      "Ingressantes": 127,
      "Diplomados": 8,
      "PrimeiroSemestre": 2,
      "SegundoSemestre": 6,
      "TaxadeSucessoporAno": 6.30
    },
    {
      "Ingressantes": 113,
      "Diplomados": 13,
      "PrimeiroSemestre": 6,
      "SegundoSemestre": 7,
      "TaxadeSucessoporAno": 11.50
    },
    {
      "Ingressantes": 127,
      "Diplomados": 33,
      "PrimeiroSemestre": 13,
      "SegundoSemestre": 20,
      "TaxadeSucessoporAno": 25.98
    }
  ];
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dd = require('./api/cc')
  const data = dd['cc']
  const datas = Object.keys(data)
  const data2 = data['2018.2']
  const materias = Object.keys(data2)


  const [select1, setSelects1] = useState();
  const [select2, setSelects2] = useState();
  const paperStyle = { padding: 15, height: '25vh', width: 280 }
  const btnstyle = { margin: '5px 0' }




  return (
    <div>
      <Grid>
        <Box
          sx={{
            display: 'center',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 7,
              width: 530,
              height: 330,
            },
          }}
        >
          <Paper elevation={10}>
            <LineChart
              width={500}
              height={300}
              data={datax}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10
              }}

            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Ingressantes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Ingressantes"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="Ingressantes" stroke="#82ca9d" />
            </LineChart>
          </Paper>
          
          <Paper elevation={10} style={paperStyle} >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Disciplina</InputLabel>
              <Select onChange={e => setSelects1(e.target.value)}>
                {}
                {materias.map(item => (
                  <MenuItem value={data2[item].nome}>{data2[item].nome}</MenuItem>
                ))
                }
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Periodo</InputLabel>
              <Select onChange={e => setSelects2(e.target.value)}>
                {datas.map(item => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))
                }

              </Select>

            </FormControl>
            <Button
              type='submit' variant='contained' onClick={() => formata()}>
              Criar
            </Button>
          </Paper>

        </Box>
      </Grid>

    </div>




  );
}


var datax;



function formata() {
  datax = [
    {
      "Ingressantes": 0,
      "Diplomados": 0,
      "PrimeiroSemestre": 0,
      "SegundoSemestre": 0,
      "TaxadeSucessoporAno": 0
    },
    {
      "Ingressantes": 0,
      "Diplomados": 0,
      "PrimeiroSemestre": 0,
      "SegundoSemestre": 0,
      "TaxadeSucessoporAno": 0
    },
    {
      "Ingressantes": 52,
      "Diplomados": 1,
      "PrimeiroSemestre": 1,
      "SegundoSemestre": 0,
      "TaxadeSucessoporAno": 1.92
    },
    {
      "Ingressantes": 127,
      "Diplomados": 8,
      "PrimeiroSemestre": 2,
      "SegundoSemestre": 6,
      "TaxadeSucessoporAno": 6.30
    },
    {
      "Ingressantes": 113,
      "Diplomados": 13,
      "PrimeiroSemestre": 6,
      "SegundoSemestre": 7,
      "TaxadeSucessoporAno": 11.50
    },
    {
      "Ingressantes": 127,
      "Diplomados": 33,
      "PrimeiroSemestre": 13,
      "SegundoSemestre": 20,
      "TaxadeSucessoporAno": 25.98
    }
  ];

}









