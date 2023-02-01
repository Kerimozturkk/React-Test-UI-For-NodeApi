import {useState,useEffect} from 'react'
import axios from 'axios'

function AddOrder() {

    const onSubmitHandler = () => {
        axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
        })
    }

  return (
    <div>
      <h2>Order Adder Component</h2>
      <p>adding carefully because no validation for DB</p>
      <form method='POST' action="http://localhost:3001/addorder">
        id: <input type="text" name='id'/><br/>
        employeeId: <input type="text" name='employeeId'/><br/>
        orderNumber: <input type="text" name='orderNumber'/><br/>
        customerId: <input type="text" name='customerId'/><br/>
        <button onSubmit={onSubmitHandler} >Submit</button>
      </form>
    </div>
  )
}

export default AddOrder
