
import { useEffect, useState } from "react"
import User from "./user";

export default function Users(){
    const [users, setUsers]=useState([]);
    


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then (data => setUsers(data))
        .catch(e => alert(e));
    },[])
   
    return(
      <>

        {
            
            users.map(x => <User post={x}></User>)
          
        }

      </>
       
        
      
        
     
       
        
    )
   
 
}
