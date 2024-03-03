import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import { useEffect} from 'react'
import DataTable from 'react-data-table-component'
function Sql() {
  const column = [
    {
      name:"sno",
      selector: row => row.sno
    },
    {
      name: " customername",
      selector: row => row.name
    },
    {
      name: "age",
      selector: row => row.age
    },
    {
      name: "phone",
      selector: row => row.phone
    },
    {
      name: "location",
      selector: row => row.location
    },{
      name: "create-at",
      selector: row => row.createdat
    }
  ]
    useEffect(() =>{
      const fetData = async() => {
        axios.get("http://localhost:8081/userss")
        .then(res=> {
          setRecords(res.data)
          setFilterRecords(res.data)
        })


        
      }
      fetData();
    }, [])
    const [records, setRecords]= useState([]);
    const [filterRecords, setFilterRecords]= useState([]);

    const handleFilter=(event)=>{
      const newData= filterRecords.filter(row=> row.name.tolowerCase().includes(event.target.value.tolowerCase()))
      setRecords(newData);
    }
  return (
    <div style={{padding: '50px 10%'}}>
      <div style={{ diplay: 'flex', justifyContent:'left'}}>
        <input type ='text' placeholder='Search...' onChange={handleFilter} style={{padding:'6px 10px'}}/>
      </div>
      <DataTable
      columns={column}
      data={records}
      pagination>

      </DataTable>
      
       
    </div>
  );
}

export default Sql