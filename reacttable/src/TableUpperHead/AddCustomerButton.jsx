import React from 'react'
import '../style/AddCustomerButton.css'
import { Plus } from 'react-feather'
import { useNavigate } from 'react-router-dom'

const AddCustomerButton = () => {
  const navigate=useNavigate()
  const handleAddCustomer=()=>{
    navigate('/add-customer')

  }
  return (
    <div className='AddCustomerMain'>
      <button className='button-add-customer'  onClick={handleAddCustomer}>   
<Plus/>Add Customer</button>
    </div>
  )
}

export default AddCustomerButton
