"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    JavaScript: 100,
    TypeScript: 145,
    React: 140,
    Vue: 60,
    NextJs: 109,
    NuxtJs: 59,
  },
  {
    name: "Mon",
    JavaScript: 170,
    TypeScript: 190,
    React: 178,
    Vue: 90,
    NextJs: 120,
    NuxtJs: 80,
  },
  {
    name: "Tue",
    JavaScript: 120,
    TypeScript: 130,
    React: 200,
    Vue: 100,
    NextJs: 170,
    NuxtJs: 120,
  },
  {
    name: "Wed",
    JavaScript: 130,
    TypeScript: 200,
    React: 190,
    Vue: 40,
    NextJs: 109,
    NuxtJs: 40,
  },
  {
    name: "Thu",
    JavaScript: 140,
    TypeScript: 180,
    React: 210,
    Vue: 80,
    NextJs: 160,
    NuxtJs: 60,
  },
  {
    name: "Fri",
    JavaScript: 170,
    TypeScript: 140,
    React: 225,
    Vue: 100,
    NextJs: 150,
    NuxtJs: 70,
  },
  {
    name: "Sat",
    JavaScript: 150,
    TypeScript: 180,
    React: 240,
    Vue: 120,
    NextJs: 170,
    NuxtJs: 69,
  },
];

const Chart =  () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>今週のジャンルトレンド</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="JavaScript" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="TypeScript" stroke="#82ca9d" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="React" stroke="#cac382" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Vue" stroke="#ca8282" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="NextJs" stroke="#b282ca" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="NuxtJs" stroke="#ca9982" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;