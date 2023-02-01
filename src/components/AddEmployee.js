import {useState,useEffect} from 'react'
import axios from 'axios'

function AddEmployee() {

    const onSubmitHandler = () => {
        axios({
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
        })
    }

  return (
    <div>
      <h2>Employee Adder Component</h2>
      <p>adding carefully because no validation for DB</p>
      <form method='POST' action="http://localhost:3001/addemployee">
        id: <input type="text" name='id'/><br/>
        name: <input type="text" name='name'/><br/>
        surname: <input type="text" name='surName'/><br/>
        <button onSubmit={onSubmitHandler} >Submit</button>
      </form>
    </div>
  )
}

export default AddEmployee
