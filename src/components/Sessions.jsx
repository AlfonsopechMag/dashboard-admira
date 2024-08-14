import React, {useEffect, useState} from "react";
import { BsThreeDots } from "react-icons/bs";
import {useFetch} from "../utils/useFetch";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Expenses() {
  const {data, loading} = useFetch("json/gAnalytics.json");
  const [dataChart, setDataChart] = useState([])
  
  useEffect(()=>{
    !loading &&  
      data.vistasPagina.map((value, keyVista)=>{                
        data.sesiones.map((sesiones)=>{                 
          value.fecha === sesiones.fecha && (data.vistasPagina[keyVista].sesiones = sesiones.sesiones);
          setDataChart(data.vistasPagina)
        })
      });
  },[loading])  

  return (
    <div className="expenses">
      <div className="expenses__info">
        <h4>Sesiones</h4>
        <BsThreeDots />
      </div>
      <div className="expenses__container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="sesiones" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="vistas" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        
      </div>
    </div>
  );
}