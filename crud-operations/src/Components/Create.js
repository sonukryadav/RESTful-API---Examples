import React, { useState, useEffect } from 'react';
import '../App.css'

const Create = () => {

    const [data, setData] = useState({
        first_name: 'Sonu',
        last_name: 'kr.',
        email: 'sonukryadav56@gmail.com',
        image:'https://i.pinimg.com/originals/f4/a0/7d/f4a07d9eff297f54ae5f99fdd470326b.gif'
    });

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`  http://localhost:3002/data`).then((res) => res.json()).then((data) => setList(data));
    },[]);

    const handel1 = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3002/data`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        fetch(`http://localhost:3002/data`).then((res) => res.json()).then((data) => setList(data));
        alert("Data added successfully");
    };

    return (
        <div>
            <h1>-: Create/Post :-</h1>
            <div className='create1'>
                <div className='create2'>
                    <form className='form1' onSubmit={(e)=>submit(e)}>
                        <div className='form1'>
                            <label>first_name : </label>
                            <input className='inp3' type={'text'} name="first_name" value={data.first_name} placeholder="first_name" onChange={(e)=>handel1(e)} />
                        </div>
                        <div className='form1'>
                            <label>last_name : </label>
                            <input className='inp3' type={'text'} name="last_name" value={data.last_name} placeholder="last_name" onChange={(e) => handel1(e)} />
                        </div>
                        <div className='form1'>
                            <label>email : </label>
                            <input className='inp3' type="email" name="email" value={data.email} placeholder="email" onChange={(e) => handel1(e)} />
                        </div>
                        <div className='form1'>
                            <label>avatar : </label>
                            <input className='inp3' type='text' name="image" value={data.image} placeholder="avatar link" onChange={(e) => handel1(e)} />
                        </div>
                        <div className='form1'>
                            <input className='inp4' type="submit" value="POST" />
                        </div>
                    </form>
                </div>

                <div className='create3'>
                    {list.length ? (Data2(list)):<h1>No data available</h1> }
                </div>
            </div>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
                <h1>Code</h1>
                
            </div>
        </div>
    )
}

const Data2 = (data) => {
    return (
        data.map((d, id) => (
            <div key={id}>
                <p>id : {d.id}</p>
                <p>first_name : {d.first_name}</p>
                <p>last_name : {d.last_name}</p>
                <p>email : {d.email}</p>
                <img src={d.image} width="80" height="80" alt="image1" />
                <hr />
            </div>
        ))
    )
};

export default Create
