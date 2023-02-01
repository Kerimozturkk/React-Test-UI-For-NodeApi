import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import AddEmployee from './components/AddEmployee';
import AddOrder from './components/AddOrder';
import AddCustomer from './components/AddCustomer';



function App() {

  const [getData,setGetData] = useState([]);
  const [postData,setPostData] = useState({});


  //Visible states
  const [showAddEmp,setShowAddEmp] = useState(false);
  const [showAddOrd,setShowAddOrd] = useState(false);
  const [showAddCus,setShowAddCus] = useState(false);


  // useEffect(() => {
  //   axios('http://localhost:3001')
  //     .then(res => setGetData(res.data))
  //     .catch(e => console.log(e));
  // },[])

  const onChangeInput = (e) => {
    const newObject = {[e.target.name]: e.target.value}
    setPostData(newObject);
  }

  const onSubmitData = (e) => {
    axios({
      method: "post",
      url: "http://localhost:3001/add",
      data: postData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }



  const visibleEmpAdder = () => {
    setShowAddEmp(!showAddEmp)
  }

  const visibleOrdAdder = () => {
    setShowAddOrd(!showAddOrd)
  }

  const visibleCusAdder = () => {
    setShowAddCus(!showAddCus)
  }


  const requestForEmployees = async() => {
    await axios('http://localhost:3001/employees')
      .then(res => console.log("Employees Result =>",res.data))
      .catch(e => console.log(e));
  }

  const requestForCustomers = async() => {
    await axios('http://localhost:3001/customers')
      .then(res => console.log("Customer Result =>",res.data))
      .catch(e => console.log(e));
  }

  const requestForOrders = async() => {
    await axios('http://localhost:3001/orders')
      .then(res => console.log("Orders Result =>",res.data))
      .catch(e => console.log(e));
  }

  const requestForOrdersDetails = async() => {
    await axios('http://localhost:3001/orderdetails')
      .then(res => console.log("Orders Details Result =>",res.data))
      .catch(e => console.log(e));
  }

  return (
    <div className="App">
     {/* {getData}

     <form method='POST' action='http://localhost:3001/add'>
      <input type="text" name='title' onChange={onChangeInput}/>
      <button onSubmit={onSubmitData}>Submit</button>
     </form>

     <hr/> */}
     <h1>Test Client For Store Node Api</h1>
     <hr/>
     <button onClick={visibleEmpAdder}>Show Employee Adder Form</button>
     {
       showAddEmp ? (<AddEmployee />) : null
     }
     <hr/>
     <button onClick={visibleCusAdder}>Show Customer Adder Form</button>
     {
       showAddCus ? (<AddCustomer />) : null
     }
     <hr/>
     <button onClick={visibleOrdAdder}>Show Order Adder Form</button>
     {
       showAddOrd ? (<AddOrder />) : null
     }
     <hr/>
     <br/>
     <div style={{display:"flex",columnGap:"10px"}}>
      <button onClick={requestForEmployees}>Request for Employees</button>
      <button onClick={requestForCustomers}>Request for Customers</button>
      <button onClick={requestForOrders}>Request for Orders</button>
     </div>
     <hr/><br/>
     <div>
        <p>
          Store'daki bütün siparişlerin durumuna ilişkisel olarak erişmek için
          aşağıdaki butonu kullan!!
        </p>
        <button onClick={requestForOrdersDetails}>Reach to Orders Details</button>
     </div>
     <br/><br/>

    </div>
  );
}

export default App;
