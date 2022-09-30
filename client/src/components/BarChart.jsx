import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import React, { useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {bestsold} from "../redux/actions/index"
   
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );
    
    function BarChart() {
      const [chartData, setChartData] = useState({
        datasets: [],
      });
      
      const [chartOptions, setChartOptions] = useState({});
      const dispatch = useDispatch()
      const vendido = useSelector(state => state.sold)
      // console.log("acaaaaaaaaaaaa", vendido)
/*       useEffect(() => {
       dispatch(bestsold())
      },[]) */
      
    let objeto = {}
    for (let i = 0; i < vendido.length; i++) {
      // console.log("carlitos", vendido[i].sold)
      // console.log("branddddd", vendido[i].brand)
      if(objeto[vendido[i].brand]) {objeto[vendido[i].brand] = objeto[vendido[i].brand] + vendido[i].sold}
      else{(objeto[vendido[i].brand] = vendido[i].sold)}
    }
    
    // console.log("objetito", objeto)
    const labels = Object.keys(objeto)
    const data = Object.values(objeto)
    // console.log(labels)
    // console.log(data)

    useEffect(() => {
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Marcas más vendidas",
            data: data,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.4)",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Kustoms-Sports",
          },
        },
      });
      dispatch(bestsold())
    }, [dispatch]);

    
    return (
      <div className=" w-50 h-30 mx-px">
        <Bar options={chartOptions} data={chartData} />
      </div>
    );
  }
   
  export default BarChart;