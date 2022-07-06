import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Get = () => {
    
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://62c2a546876c4700f529cd71.mockapi.io/bekki')
            .then(res =>{
                setUsers(res.data)
                console.log(res)
            })
            .catch(err =>{
                console.log('!error')
            })
            

    }, [])
    return (
        <>
           {users.map(gets =>(
            <div>
                <h1>{gets.name}</h1>
                <p>{gets.iduser}</p>
            </div>
           ))}
        </>
    );
};
export default Get;