import React from 'react';
import '../EmplListItem/emplListItem.css';

function EmplListItem({ item }) {
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
      
        <button type="button" className="btn-md">
          update
        </button>
      
      
        <button type="button" className="btn-md">
          delete
        </button>
      
    </>
  );
}

export default EmplListItem;
