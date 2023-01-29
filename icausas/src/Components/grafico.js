import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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

const data = [
  {
    name: "Borboleta",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Barata",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Cavalo",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Dino",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Elefante",
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
];

export default function Grafico() {
  return (
    <Grid>
    <Box
      sx={{
        display: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          width: 530,
          height: 330,
        },
      }}
    >
      <Paper elevation={10}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </Paper>
      <Paper elevation={10} />

    </Box>
    </Grid>
  );


}
