import React from 'react';
import { FaTimes } from "react-icons/fa";
import '../css/search.css';

export default function Search({filter, setFilter, setSearchActive, searchActive, setAnalyticsActive}) {
  

  return (
    <div className='search__modal' onClick={(e) => e.stopPropagation()}>
        <div className='search'>
            <FaTimes className='exit' onClick={() => {setFilter(''); setSearchActive(!searchActive); setAnalyticsActive(false)}}/>
            <h1 className='label'>Search</h1>
            <input className='search_input' value={filter || ''} onChange={(e) => setFilter(e.target.value)} placeholder="Enter value" />
            <p onClick={() => {setFilter('')}} className='clear'>Clear</p>
        </div>
    </div>
  )
}
