import React from 'react';
import { applicationContext } from '../../context/AplicationContext';
import { useContext } from 'react'
import '../EmplListItem/emplListItem.css';


function EmplListItem({ item }) {

  const { deleteEmployee, setEmplModalData } = useContext(applicationContext);


  return (
    <>
      <td>
        <p className="blue-dot"></p>
      </td>
      <td>
        <p>{item.name}</p>
      </td>
      <td>
        <p>{item.email}</p>
      </td>
      <td>
        <p>{item.phone}</p>
      </td>
      <td>
        <p>{item.dateOfBirth}</p>
      </td>
      <td>
        <p>{item.salary}</p>
      </td>
      <td>
        <button type="button" 
        onClick={() => {
          setEmplModalData(item);
          }}
          className="btn-md">
          update
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => {
            deleteEmployee(item);
          }}
          className="btn-md"
        >
          delete
        </button>
      </td>
    </>
  );
}

export default EmplListItem;
