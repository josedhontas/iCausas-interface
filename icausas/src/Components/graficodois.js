import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
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
 
  const dd = require('./api/cc')
  const data = dd['cc']
  const datas = Object.keys(data)
  const data2 = data['2019.2']
  const materias = Object.keys(data2)
  const materiasaux = Object['2019.2']

  const [select1, setSelects1] = useState();
  const [select2, setSelects2] = useState();
  const [select3, setSelects3] = useState();
  const paperStyle = { padding: 15, height: '25vh', width: 280 }

  var datt = []
  var dutt = []
  var aux = []
  let i;
  for(i = select2; i <=select3; i++){
    aux = (data[datas[i]]);
    aux[select1].Ano = datas[i]
    datt = datt.concat(aux[select1]);
  }

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
              data={datt}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10
              }}

            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Ano" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Aprovados"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="Reprovados" stroke="#82ca9d" />
            </LineChart>
          </Paper>
          <Paper elevation={10} style={paperStyle} >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Disciplina</InputLabel>
              <Select onChange={e => setSelects1(e.target.value)}>
                {}
                {materias.map(item => (
                  <MenuItem value={item}>{data2[item].nome}</MenuItem>
                ))
                }
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Inicio</InputLabel>
              <Select onChange={e => setSelects2(e.target.value)}>
                {datas.map((item, i) => (
                  <MenuItem value={i}>{item}</MenuItem>
                ))
                }

              </Select>


            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Fim</InputLabel>
              <Select onChange={e => setSelects3(e.target.value)}>
                {datas.map((item, i) => (
                  <MenuItem value={i}>{item}</MenuItem>
                ))
                }


              </Select>

            </FormControl>

          </Paper>

        </Box>
      </Grid>

    </div>




  );
}


var datax;












