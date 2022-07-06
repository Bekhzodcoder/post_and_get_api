import React, {useState} from 'react';
import Axios from 'axios';




    const Post = () =>{
        const url = 'https://62c2a546876c4700f529cd71.mockapi.io/bekki';
         const [data, setData] = useState({
            name:"",
            date:"",
            iduser:""

         })

         function handle(e){
            const newData = {...data};
            newData[e.target.id] = e.target.value
            setData(newData)
            console.log(newData)
         }
         function submit(e){
            e.preventDefault();
            Axios.post(url,{
                name: data.name,
                date: data.date,
                iduser: data.iduser
            })
            .then(res =>{
                console.log(res.data)
            })
         }
    return (
        <>
            <form onSubmit={(e)=>submit(e)}>
                <input type='text' onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' />
                <input type="date" onChange={(e)=>handle(e)} id="date" value={data.date} placeholder='date'/>
                <input type="number" onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder='iduser'/>
                <input type="submit" value='yuborish' />
            </form>
        </>
    );
};

export default Post;