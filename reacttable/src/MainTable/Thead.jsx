import React from 'react'
import '../style/Thead.css'

const Thead = () => {
  
  const titles =["Id", "Name", "Username", "Email", "City", "Suite", "Zipcode", "Action"];

  return (
    <tr className='table-title'>
        {<>{
          titles.map((item,i)=>{
            return (<th  className={ `titles-${item}` }  key={i} >{item}</th>)
          })
        }
            </>
        }
     </tr>
  )
}

export default Thead
