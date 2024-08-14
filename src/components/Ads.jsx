import React, {useState, useEffect} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {useFetch} from "../utils/useFetch";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
}

export default function Overview() {
  /* const {data, loading} = useFetch("json/gAnalytics.json"); */
  const [dataChart, setDataChart] = useState([])


  useEffect(()=>{
   /*  loading === true &&                
        data.demografia.edad.map((value, index)=>{          
          data.demografia.genero.map((generoValue)=>{
        
            data.demografia.edad[index].tipo = generoValue.tipo;
            data.demografia.edad[index].porcentaje_genero = generoValue.porcentaje;
                         
          })
          setDataChart(data.demografia.edad);
        })  */
  },[])

  console.log(dataChart);
  

  return (
    <div className="overview">
      <div className="overview__title">
        <h3>ADS</h3>
        <div className="title__buttons">
          {/* <button>Month</button>
          <button>Year</button> */}
        </div>
      </div>
      <div className="overview__graph">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={dataChart}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="tipo"
            >
              {dataChart?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="overview__insights">
        {/* <div className="insight">
          <h4>Invoices</h4>
          <div>
            <h3>34</h3>
            <h4>Unpaid</h4>
          </div>
        </div>
        <div className="insight">
          <h4>Transactions</h4>
          <div>
            <h3>737</h3>
            <h4>Completed</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}