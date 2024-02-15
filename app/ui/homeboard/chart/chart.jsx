"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    javascript: 300,
    typescript: 400,
    react: 344,
    vue: 100,
    nextJs: 120,
    nuxtJs: 90,
  },
  {
    name: "Mon",
    javascript: 600,
    typescript: 398,
    react: 544,
    vue: 300,
    nextJs: 200,
    nuxtJs: 130,
  },
  {
    name: "Tue",
    javascript: 300,
    typescript: 800,
    react: 644,
    vue: 100,
    nextJs: 590,
    nuxtJs: 200,
  },
  {
    name: "Wed",
    javascript: 780,
    typescript: 908,
    react: 1044,
    vue: 400,
    nextJs: 590,
    nuxtJs: 300,
  },
  {
    name: "Thu",
    javascript: 890,
    typescript: 900,
    react: 844,
    vue: 400,
    nextJs: 890,
    nuxtJs: 300,
  },
  {
    name: "Fri",
    javascript: 1100,
    typescript: 970,
    react: 600,
    vue: 200,
    nextJs: 540,
    nuxtJs: 300,
  },
  {
    name: "Sat",
    javascript: 800,
    typescript: 1100,
    react: 850,
    vue: 500,
    nextJs: 740,
    nuxtJs: 400,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
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
          <Line type="monotone" dataKey="javascript" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="typescript" stroke="#82ca9d" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="react" stroke="#cac382" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="vue" stroke="#ca8282" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="nextJs" stroke="#b282ca" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="nuxtJs" stroke="#ca9982" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart