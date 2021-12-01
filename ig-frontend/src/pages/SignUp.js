import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from '../context/UserContext'

export default ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, setUser} = useContext(UserContext) 
    
    useEffect(() => {
        if(user){
            history.push('/')
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await fetch('http://localhost:1337/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    email,
                    password
                })
            })
            const data = await response.json()
            if(data.message){
                setError(data.message[0].messages[0].message)
                return
            }
            console.log(data)

            setUser(data)
        }catch(err){
            setError("Something went wrong ", err)
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br/>
                <input 
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                />
                 <br/>
                <button>Submit</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}