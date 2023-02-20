import React, { useEffect, useMemo, useState } from 'react';
// import { dataConst } from './Data'; //<== test values (local)
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import Chart from './Chart';
import '../css/main.css';
// import DataBase from './database/DataBase';
import {db} from './database/FireBase';
import {collection, getDocs} from 'firebase/firestore';
import {BsArrowLeftCircle} from "react-icons/bs";
import { InfinitySpin } from  'react-loader-spinner';
import Search from './Search';
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";


export default function Main() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  // state for loading spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map(doc => ({
                ...doc.data(),
                // id: doc.id
        }
      )))
      setLoading(false);
    }

    getUsers();
  }, []);


  const data = useMemo(() => users, [users]); // data import | takes some time
  const columns = useMemo(() => [/*{ Header: "#", accessor: "id", },*/ { Header: "Name", accessor: "name", }, 
    { Header: "Age", accessor: "age", }, 
    { Header: "Salary", accessor: "salary", },
    { Header: "Email", accessor: "email", }], []);


  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter} = useTable({columns, data}, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  const cfg = {
    labels: data.map((d) => (d.age)),
    datasets: [{
      label: "Global Salary Information",
      data: data.map((d) => (d.salary)),
      backgroundColor: ["black"]
    },
    {
      label: "Kazakhstan Salary Information",
      data: data.map((d) => (d.salary*1.33)),
      backgroundColor: ["aqua"]
    }]
  };

  const [barActive, setBarActive] = useState(false); // state for chart modal
  const [analyticsActive, setAnalyticsActive] = useState(false); // state for analytics
  const [searchActive, setSearchActive] = useState(false); // state for search



  return (
    <div>
      {loading && <div className="body__spinner"><InfinitySpin width='200' color="white" /></div>}
      <div style={{display: "none"}}>{users.map(user => {
        return <p>{user.id} {user.name} {user.age} {user.salary} {user.email}</p>
    })}</div>
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps({ title: undefined }))}>
                    {column.render("Header")}
                    <span>{column.isSorted ? (column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />) : ''}</span>
                    </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      
      {!analyticsActive ?
      <div onClick={() => setAnalyticsActive(true)} className="arrow___analytics___body">
        <BsArrowLeftCircle  className="arrow___analytics"/>
      </div> 
      :
      <div className='arrow___hide' onClick={() => {setAnalyticsActive(false)}}><FaTimes /></div> 
      }
      
      {analyticsActive && <button className="show___analytics" onClick={() => setBarActive(true)}>Analytics</button>}
      {analyticsActive &&
      <button className="show___search" onClick={() => {setSearchActive(!searchActive)}}>{searchActive ? 'Search disable' : 'Search enable'}</button>}
      
      {barActive && <Chart dataForChart={cfg} setBarActive={setBarActive}/>}
      {searchActive && <Search filter={globalFilter} setFilter={setGlobalFilter} setSearchActive={setSearchActive} searchActive={searchActive} />}
      
    </div>
  )
}
