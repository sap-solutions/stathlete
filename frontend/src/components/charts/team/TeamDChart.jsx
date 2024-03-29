import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTeamStats } from '../../../features/team/teamSlice'
import Spinner from '../../layout/Spinner'
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
import teamService from '../../../features/team/teamService'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function TeamDChart() {
  const { teamStats } = useSelector((state) => state.team)

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Year to Year: Defensive Performance',
      },
    },
  }

  const labels = [
    '2018/2019',
    '2019/2020',
    '2020/2021',
    '2021/2022',
    '2022/2023',
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Rebounds',
        data: teamStats.map((y) => y.response[0].totReb),
        backgroundColor: '#3DBFF2',
      },
      {
        label: 'Steals',
        data: teamStats.map((y) => y.response[0].steals),
        backgroundColor: '#F2B138',
      },
      {
        label: 'Blocks',
        data: teamStats.map((y) => y.response[0].blocks),
        backgroundColor: '#32D99C',
      },
      {
        label: 'Fouls',
        data: teamStats.map((y) => y.response[0].pFouls),
        backgroundColor: '#F53F4B',
      },
    ],
  }

  return (
    <div>
      {teamStats.length > 0 ? (
        <Bar
          options={options}
          data={data}
        />
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default TeamDChart
