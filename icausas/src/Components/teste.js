import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { useState } from 'react';

function Teste() {
  const [data, setData] = useState([]);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    const newData = { name: month, uv: Math.floor(Math.random() * 5000), pv: Math.floor(Math.random() * 5000), amt: Math.floor(Math.random() * 5000) };
    setData(prevData => [...prevData, newData]);
  };

  return (
    <div>
      <select onChange={handleMonthChange}>
        <option value="">Selecione um mês</option>
        <option value="Janeiro">Janeiro</option>
        <option value="Fevereiro">Fevereiro</option>
        <option value="Março">Março</option>
        <option value="Abril">Abril</option>
        <option value="Maio">Maio</option>
        <option value="Junho">Junho</option>
        <option value="Julho">Julho</option>
        <option value="Agosto">Agosto</option>
        <option value="Setembro">Setembro</option>
        <option value="Outubro">Outubro</option>
      </select>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#ffc658" />
      </LineChart>
    </div>
  );
}

export default Teste;
