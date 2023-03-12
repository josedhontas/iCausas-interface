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

  const datas = ['2018.2', '2019.1', '2019.2', '2020.1', '2020.2', '2021.1', '2021.2']

  const [select1, setSelects1] = useState([]);
  const [select2, setSelects2] = useState(null);
  const [select3, setSelects3] = useState(null);
  const paperStyle = { padding: 15, height: '25vh', width: 280 }

  const updateSelect3 = (value) => {
    const year = parseInt(value.split('.')[0], 10);
    const semester = parseInt(value.split('.')[1], 10);
    if (semester === 2) {
      return `${year + 1}.1`;
    } else {
      return `${year}.${semester + 1}`;
    }
  };  

  function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      if (select2 !== null && select3 !== null) {
        fetch(`https://icausas-application.herokuapp.com/cc/${select2}/${select3}/Aprovados`)
          .then(response => response.json())
          .then(data => {
            const newData = data.map(item => ({
              nome: item.nome,
              data: item.data,
              intervalo: item.intervalo
            }));
            setData(newData);
          });
      }
    }, [select2, select3]);

    return (
      <Select onChange={e => setSelects1(e.target.value)}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item} label={item.nome}>{item.nome}</MenuItem>
        ))}
      </Select>
    );
  }



  useEffect(() => {
    console.log(select1);
  }, [select1]);

  const generateIntervals = (start, end) => {
    const intervals = [];
    const startYear = parseInt(start.split('.')[0], 10);
    const endYear = parseInt(end.split('.')[0], 10);
    const startSemester = parseInt(start.split('.')[1], 10);
    const endSemester = parseInt(end.split('.')[1], 10);
  
    for (let year = startYear; year < endYear; year++) {
      for (let semester = 1; semester <= 2; semester++) {
        if (year === startYear && semester < startSemester) {
          continue;
        }
        if (year === endYear && semester > endSemester) {
          continue;
        }
        intervals.push(`${year}.${semester}`);
      }
    }
  
    return intervals;
  };
  
  const Chart = () => {
    if(select1.length !== 0){
    const intervals = generateIntervals(select1.intervalo[0], select1.intervalo[1]);
  
    const chartData = intervals.map((interval, index) => {
      const value = select1.data[index] || null;
      return {
        name: interval,
        value
      };
    });
  
  
    return (
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  };
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
            <Chart></Chart>
          </Paper>
          <Paper elevation={10} style={paperStyle}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Disciplina</InputLabel>
              <MyComponent></MyComponent>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Inicio</InputLabel>
              <Select onChange={e => setSelects2(e.target.value)}>
                {datas.map((item, i) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))
                }

              </Select>


            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="">Fim</InputLabel>
              <Select onChange={e => setSelects3(updateSelect3(e.target.value))}>
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














