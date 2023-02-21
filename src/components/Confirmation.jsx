import React from 'react'
import { FaTimes, FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';



export default function Confirmation(props) {
  
  return (
    <div className='confirmation' onClick={() => {props.setShow(false)}}>
      <div className='confirmation-inner' onClick={(e) => e.stopPropagation()}>
        <h1>We would be more than <mark>happy</mark> if you leave some data for statistics</h1>

        <p>You want to stay?</p>


        <div className='check-buttons'>
          <FaCheck className='return_accept' onClick={() => {props.setShow(false)}}/>
          <Link to='/main'><FaTimes className='return_decline'/></Link>
          <img className='return-img' src='./media/help.jpg'/>
        </div>
      </div>
    </div>
  )
}
