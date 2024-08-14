import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useFetch } from "../utils/useFetch";

export default function Wallets() {
  /* const {data, loading} = useFetch("json/gAds.json") */
  const [dataChart, setDataChart] = useState([])
  
  
 /*  useEffect(()=>{
    loading === true && setDataChart(data.campañas)
  },[loading])
   */
  return (
    <div className="wallets">
      <div className="wallets__info">
        <h4>Campañas</h4>
        <BsThreeDots />
      </div>
      <div className="wallets__container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="nombre" scale="point" padding={{ left: 200, right: 200 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="1 1" />
          <Bar dataKey="impresiones" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="clics" fill="#82ca9d" background={{ fill: '#eee' }} />
          <Bar dataKey="conversiones" fill="#F8C12D" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}