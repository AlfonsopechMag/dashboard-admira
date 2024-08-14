import React, { useEffect, useState } from "react";
import {useFetch} from "../utils/useFetch"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Rectangle,
} from 'recharts';

let dataGraphic = null;

// using Customized gives you access to all relevant chart props
const CustomizedRectangle = (props) => {
  const { formattedGraphicalItems } = props;
  // get first and second series in chart
  const firstSeries = formattedGraphicalItems[0];
  const secondSeries = formattedGraphicalItems[1];

  // render custom content using points from the graph
  return firstSeries?.props?.points.map((firstSeriesPoint, index) => {
    const secondSeriesPoint = secondSeries?.props?.points[index];
    const yDifference = firstSeriesPoint.y - secondSeriesPoint.y;

    return (
      <Rectangle
        key={firstSeriesPoint.payload.name}
        width={10}
        height={yDifference}
        x={secondSeriesPoint.x - 5}
        y={secondSeriesPoint.y}
        fill={yDifference > 0 ? 'red' : yDifference < 0 ? 'green' : 'none'}
      />
    );
  });
};



export default function Transactions() {
  const {data, loading} = useFetch("json/gAnalytics.json")
  
  useEffect(()=>{
    !loading &&  
    data.vistasPagina.map((value, keyVista)=>{            
      data.sesiones.map((sesiones)=>{                         
          value.fecha == sesiones.fecha && (data.vistasPagina[keyVista].sesiones = sesiones.sesiones);
         dataGraphic = data.vistasPagina
      })
    });
  },[loading])
  
  return (
    <div className="transactions">
      <div className="transactions__info">
        <h3>Transactions</h3>
        <div className="transactions__info__detailed">
          <div>
            <h5>You Bought :</h5>
            <h4>$140,734.01</h4>
          </div>
          <div>
            <h5>You Sold : </h5>
            <h4>$347,735,011.14</h4>
          </div>
        </div>
      </div>
      <div className="transactions__details">
        <div>
          <h4>Statistics</h4>
          <h4>Up by 50%</h4>
        </div>
        <div>
          <button>Year</button>
          <button>Month</button>
        </div>
      </div>
      <div className="transactions__graph">
       

<ResponsiveContainer width="100%" height={150}>
      <LineChart
        width={500}
        height={300}
        data={dataGraphic}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sesiones" stroke="#8884d8" />
        <Line type="monotone" dataKey="vistas" stroke="#82ca9d" />
        <Customized component={CustomizedRectangle} />
      </LineChart>
    </ResponsiveContainer>
      </div>
    </div>
  );
}