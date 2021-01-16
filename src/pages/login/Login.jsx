import React from 'react';
import { api } from '../../shared/store/actions';

const Login =  () => {
    const onClick =async()=>{
        await api.get({
            url:'users'
        })
    }

    return (
        <div>
            <h2>hhhh</h2>
            <button onClick={onClick}>Click Me!</button>
        </div>
    )
}

export default Login;