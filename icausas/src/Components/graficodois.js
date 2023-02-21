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
  const getColor = (index) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return colors[index % colors.length];
  }
 
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

  const [selectedMaterias, setSelectedMaterias] = useState([]);

  useEffect(() => {
    if (select1 && select2 !== undefined && select3 !== undefined) {
      let selectedData = [];
      for (let i = select2; i <= select3; i++) {
        let dataByYear = data[datas[i]];
        let dataForMateria = dataByYear[select1];
        dataForMateria.Ano = datas[i];
        selectedData.push(dataForMateria);
      }
  
      let foundIndex = selectedMaterias.findIndex((materia) => materia.nome === data2[select1].nome);
  
      if (foundIndex !== -1) {
        let updatedSelectedMaterias = [...selectedMaterias];
        updatedSelectedMaterias[foundIndex].data = updatedSelectedMaterias[foundIndex].data.map((item) => {
          let found = selectedData.find((element) => element.Ano === item.Ano);
          return found ? found : item;
        });
        setSelectedMaterias(updatedSelectedMaterias);
      } else {
        setSelectedMaterias((prevState) => [        ...prevState,        { nome: data2[select1].nome, data: selectedData },
        ]);
      }
    }
  }, [select1, select2, select3, selectedMaterias]);
  
  

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
              data={selectedMaterias.map(item => item.data).flat()}
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
              {selectedMaterias.map((materia, index) => (
                <Line key={index} type="monotone" dataKey="Reprovados" data={materia.data} name={materia.nome} stroke={getColor(index)} />
              ))}
            </LineChart>
          </Paper>
          <Paper elevation={10} style={paperStyle}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Disciplina</InputLabel>
              <Select onChange={e => setSelects1(e.target.value)}>
                {materias.map((item, index) => (
                  <MenuItem key={index} value={item}>{data2[item].nome}</MenuItem>
                ))}
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












