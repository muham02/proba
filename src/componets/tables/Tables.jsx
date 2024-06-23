import React from 'react'
import './Tables.scss'
import axiosFolder from '../../api/index.js'
import { useState } from 'react'
import { useEffect } from 'react'
function Tables() {
    const [data,setData] = useState([])
    const [load,setLoad] = useState(false)
   const getData =()=>{
    console.log(load);
    const fetchTake = async ()=>{
        try{
          setLoad(true)
     // console.log( load);

            const responce = await axiosFolder('/users')
            setData(responce.data);
            }catch(error){
            console.log(error);
         
        }
        finally{
setLoad(false)
        }

            }
   fetchTake()

   }
   useEffect(()=>{
getData()
   },[])
  return (
    <div className='tables__dad'>
           
   
 <table className='tables'>
 <tr className='tables__child'>
 <th className='tables__child--item'>NAME</th>
<th  className='tables__child--item'>USERNAME</th>
<th  className='tables__child--item'>PHONE</th>
<th  className='tables__child--item'>WEBSITE</th>
<th  className='tables__child--item'>EMAIL</th>

</tr>
 </table>
   {
     data.map(users=>{
      // console.log(users);
     return(
        <table className='tables' key={users.id}>
        
  <tr className='tables__child--inner'>
    <th className='tables__child--item'>{users.name}</th>
    <th className='tables__child--item'>{users.username}</th>
    <th className='tables__child--item'>{users.phone}</th>
    <th className='tables__child--item'>{users.website}</th>
    <th className='tables__child--item'>{users.email}</th>

  </tr>
 
</table>
     )
     })
   }
   {
    load && <div className='loading'>
     <p className="loading__center">Loding...</p>
    </div>
   }
    </div>
  )
}

export default Tables