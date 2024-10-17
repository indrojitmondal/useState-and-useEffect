import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then (data => setUsers(data))
    },[])
    const userStyle={
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
      }
    return(
      <>

        {
            // way-1
            //  users.map(user => <User name={user.name} email={user.email}></User>)
            // Way-2
            users.map(user => {
               return <User name={user.name} email={user.email}></User>
              })
          
        }

      </>
       
        
      
        
     
       
        
    )
    function User({name,email}){
        return(
            <div style={userStyle}>
                <h3>Name: {name}</h3>
                <p>Email:{email}</p>
            </div>
          
        )
    }
}