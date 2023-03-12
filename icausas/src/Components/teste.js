import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = {
  nome: 'Algebra Linear',
  data: [39, 11, 44, 8, 77, 10],
  intervalo: ['2019.1', '2021.2']
};

const generateIntervals = (start, end) => {
  const intervals = [];
  const startYear = parseInt(start.split('.')[0], 10);
  const endYear = parseInt(end.split('.')[0], 10);
  const startSemester = parseInt(start.split('.')[1], 10);
  const endSemester = parseInt(end.split('.')[1], 10);

  for (let year = startYear; year <= endYear; year++) {
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
  const intervals = generateIntervals(data.intervalo[0], data.intervalo[1]);

  const chartData = intervals.map((interval, index) => {
    const value = data.data[index] || null;
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

export default Chart;


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const apiUrl = 'https://icausas-application.herokuapp.com/cc/2018.1/2021.1/Aprovados';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(apiUrl);
      setData(response.data);
    }

    fetchData();
  }, []);

  // Formata os dados para o formato adequado para o Recharts
  const formattedData = data.map(item => ({
    nome: item.nome,
    media: item.statistics.media,
    desvio: item.statistics.desvio,
    data: item.data.map((value, index) => ({
      name: `Semestre ${index + 1}`,
      value,
    })),
    rgb: item.rgb,
  }));

  return (
    <LineChart
      width={800}
      height={600}
      data={formattedData}
      margin={{
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nome" />
      <YAxis />
      <Tooltip />
      <Legend />
      {formattedData.map((item, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="value"
          data={item.data}
          name={item.nome}
          stroke={`rgb(${item.rgb.join(',')})`}
        />
      ))}
    </LineChart>
  );
}

export default App;*/
