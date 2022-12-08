import React, { useState, useEffect } from 'react';
import '../App.css'
import img1 from './assets/code2.png'

const Create = () => {

    const [bool, setBool] = useState(0);
    const [resd, setResd] = useState([]);
    const [data, setData] = useState({
        first_name: 'Sonu',
        last_name: 'kr.',
        email: 'sonukryadav56@gmail.com',
        avatar: 'https://i.pinimg.com/originals/f4/a0/7d/f4a07d9eff297f54ae5f99fdd470326b.gif'
    });
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://reqres.in/api/users`).then((res) => res.json()).then((data) => setList(data.data));
    }, []);

    const handel1 = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        fetch(`https://reqres.in/api/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => setResd(data));
        setBool(1);
        alert("POST method - successful ");
    };
    console.log(resd);
    return (
        <div>
            <h1>-: Create/Post :-</h1>
            <div className='create1'>
                <div className='create2'>
                    <form className='form1' onSubmit={(e) => submit(e)}>
                        <div className='form1'>
                            <label>first_name : </label>
                            <input className='inp3' type={'text'} name="first_name" value={data.first_name} placeholder="first_name" onChange={(e) => handel1(e)} />
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
                            <input className='inp3' type='text' name="avatar" value={data.avatar} placeholder="avatar link" onChange={(e) => handel1(e)} />
                        </div>
                        <div className='form1'>
                            <input className='inp4' type="submit" value="POST" />
                        </div>
                    </form>
                </div>
                <div className='create3'>
                    {bool ? (Data3(resd)) : (Data2(list))}
                </div>
            </div>
            <div style={{ backgroundColor: 'black', color: 'white', padding:"20px" }}>
                <h1>Code</h1>
                <img src={ img1} width="80%" height="400" alt='image1' />
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
                <img src={d.avatar} width="80" height="80" alt="image1" />
                <hr />
            </div>
        ))
    )
};

const Data3 = (d) => {
    return (
            <div>
                <p>id : {d.id}</p>
                <p>first_name : {d.first_name}</p>
                <p>last_name : {d.last_name}</p>
                <p>email : {d.email}</p>
                <img src={d.avatar} width="200" height="200" alt="image1" />
                <hr />
            </div>
    )
};

export default Create
