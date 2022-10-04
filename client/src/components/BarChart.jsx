import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bestsold } from '../redux/actions/index'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function BarChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})
  const [datos, setDatos] = useState({})
  const dispatch = useDispatch()
  const vendido = useSelector((state) => state.sold)

  let labels = []
  let data = []
  // let objeto = {};
  let label = ''
  const handleSelect = (e) => {
    let objeto = {}
    switch (e.target.value) {
      case 'Marcas':
        objeto = {}
        label = ''
        for (let i = 0; i < vendido.length; i++) {
          if (objeto[vendido[i].brand]) {
            objeto[vendido[i].brand] =
              objeto[vendido[i].brand] + vendido[i].sold
          } else {
            objeto[vendido[i].brand] = vendido[i].sold
          }
        }
        label = 'Ventas por marca'
        break
      case 'Colecciones':
        objeto = {}
        label = ''
        for (let i = 0; i < vendido.length; i++) {
          if (objeto[vendido[i].collection]) {
            objeto[vendido[i].collection] =
              objeto[vendido[i].collection] + vendido[i].sold
          } else {
            objeto[vendido[i].collection] = vendido[i].sold
          }
        }
        label = 'Ventas por colección'
        break
      case 'Deporte':
        objeto = {}
        label = ''
        for (let i = 0; i < vendido.length; i++) {
          if (objeto[vendido[i].sport]) {
            objeto[vendido[i].sport] =
              objeto[vendido[i].sport] + vendido[i].sold
          } else {
            objeto[vendido[i].sport] = vendido[i].sold
          }
        }
        label = 'Ventas por deporte'
        break

      default:
        break
    }
    labels = Object.keys(objeto)
    data = Object.values(objeto)
    setDatos({ labels, data, label })
  }

  useEffect(() => {
    labels = datos.labels
    data = datos.data
    label = datos.label

    setChartData({
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        },
      ],
    })
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Kustoms-Sports',
        },
      },
    })
    dispatch(bestsold())
  }, [datos])

  return (
    <div>
      <select
        className={` z-20 md:w-52 w-fit h-14 uppercase text-center `}
        onChange={(e) => handleSelect(e)}
      >
        <option
          className={`uppercase text-sm`}
          selected
          value="default"
          disabled
        >
          Opciones
        </option>
        <option className={`uppercase `} value="Marcas">
          Marcas
        </option>
        <option className={`uppercase `} value="Colecciones">
          Colecciones
        </option>
        <option className={`uppercase `} value="Deporte">
          Deporte
        </option>
      </select>

      <div className=" w-50 h-30 ">
        <Bar options={chartOptions} data={chartData} />
      </div>
    </div>
  )
}

export default BarChart
