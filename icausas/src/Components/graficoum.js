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

export default function GraficoUm() {
  const dd = require('./api/sucesso')
  const data = dd['cc']
  const datas = Object.keys(data)

  const [selectedMonths, setSelectedMonths] = useState([]);

  // Função que gera os dados a serem exibidos no gráfico
  const generateData = () => {
    const datt = [];

    // Para cada mês selecionado, adiciona uma nova linha no gráfico
    selectedMonths.forEach((month) => {
      const { Ingressantes, Diplomados } = data[month];
      datt.push({ Mes: month, Ingressantes, Diplomados });
    });

    return datt;
  };

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
              data={generateData()}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line connectNulls
                type="monotone"
                dataKey="Diplomados"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line connectNulls type="monotone" dataKey="Ingressantes" stroke="#82ca9d" />
            </LineChart>
          </Paper>
          
          <Paper elevation={10}  >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Mês</InputLabel>
              <Select onChange={e => setSelectedMonths([...selectedMonths, e.target.value])}>
                {datas.map((item, i) => (
                  <MenuItem key={i} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Box>
      </Grid>
    </div>
  );
}


