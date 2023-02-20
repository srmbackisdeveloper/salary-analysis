import React from 'react'
import '../css/404.css';

import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const navigate = useNavigate();
  console.error("Error 404: Page not found!");
  
  return (
    <div className='error404'>
      <h1>Page Not Found</h1>
      <button onClick={() => {navigate('/')}}>Go back</button>
    </div>
  )
}
