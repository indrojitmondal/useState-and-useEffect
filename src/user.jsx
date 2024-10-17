import './user.css'
export default function User({post}){

         const {name,email}=post;
        
       
        return(
            <div className='user'>

            <h3>Name: {name} </h3>
            <p>Email: {email}</p>

            </div>
        )
    
}