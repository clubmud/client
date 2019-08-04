import React from 'react'
import axios from 'axios';

const Auth = props => {
    const [username, setUsername] = useState('')
    const [displayedForm, setDisplayedForm] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('token') ? true: false
    )

    useEffect(() => {
        if(isLoggedIn){
            try {
                
            } catch (error) {
                
            }
        }
        return () => {
            cleanup
        };
    }, [input])

    return (
        <div>
            
        </div>
    )
}

export default Auth
