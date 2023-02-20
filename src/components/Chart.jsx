import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import '../css/chart.css';

export default function Chart(props) {
  return (
    <div className='chart__body' onClick={() => {props.setBarActive(false)}}>
        <div className='chart__modal' onClick={(e) => e.stopPropagation()}>
          <div className='chart'>
              <Bar data={props.dataForChart}/>
          </div>
        </div>
    </div>
  )
}
