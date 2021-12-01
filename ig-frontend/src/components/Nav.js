import React, {useContext} from 'react' 
import {NavLink} from 'react-router-dom'
import {UserContext} from '../context/UserContext'

export default () => {
    const {user} = useContext(UserContext)

    return (
        <div className="nav">
        <NavLink to="/" exact>Home</NavLink>
        &nbsp;    &nbsp;
        {user &&
              
               <NavLink to="/create" exact>Create</NavLink>
        }
        &nbsp;    &nbsp;
        {!user && 
        <>
            <NavLink to="/login" exact>Login</NavLink>
            &nbsp;    &nbsp;
            <NavLink to="/signup" exact>Sign Up</NavLink>
        </>
        }
       </div>
    )
}