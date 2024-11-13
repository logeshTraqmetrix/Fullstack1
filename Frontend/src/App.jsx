import React, { useEffect } from 'react';
import axios from 'axios'

const App = () => {
  useEffect(()=>{
   function fetchData(){
    axios.get('http://localhost:4000/users')
      .then((res)=>{
        console.log('response from user',res.data)
      })
      .catch((err)=>{
        console.log('error from getting user',err)
      })
   }
   fetchData()
  },[])
  
  return(<>
  </>)
}

export default App;
