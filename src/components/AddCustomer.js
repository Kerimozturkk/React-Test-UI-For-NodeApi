import {useState,useEffect} from 'react'
import axios from 'axios'


function AddCustomer() {
    
    const onSubmitHandler = () => {
        axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
        })
    }


  return (
    <div>
      <h2>Customer Adder Component</h2>
      <p>adding carefully because no validation for DB</p>
      <form method='POST' action="http://localhost:3001/addcustomer">
        id: <input type="text" name='id'/><br/>
        name: <input type="text" name='name'/><br/>
        surname: <input type="text" name='surName'/><br/>
        address: <input type="text" name='address'/><br/>
        <button onSubmit={onSubmitHandler} >Submit</button>
      </form>
    </div>
  )
}

export default AddCustomer
