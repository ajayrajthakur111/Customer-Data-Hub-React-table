import React from 'react'
import ShowEntries from './ShowEntries'
import SearchHeader from './SearchHeader'
import AddCustomer from './AddCustomerButton'
import '../style/MainHeader.css'

const MainHeader = () => {
  return (
    <div className='MainHeader'>
      <div className='search-entry'>
        <ShowEntries/>
        <SearchHeader/>
      </div>
      <div >
        <AddCustomer/>
      </div>
    </div>
  )
}

export default MainHeader


