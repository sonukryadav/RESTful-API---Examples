import React, { useState } from 'react';
import '../App.css';

const Read = () => {
    const [url, setUrl] = useState({
        url: 'https://reqres.in/api/users?page=1',
    });
    const [data, setData] = useState([]);

    const handel = (e) => {
        setUrl({ ...url, [e.target.name]: e.target.value });
    };


    const submit1 = (e) => {
        e.preventDefault();
        fetch(url.url)
        .then(res => res.json())
        .then(data => setData(data.data))
        console.log(data)
    }


    return (
        <div>
            <h1>-: Read(Get) :-</h1>
            <div className='read'>
                <div className='read1'>
                    <div>
                        <form onSubmit={e => submit1(e)}>
                            <input className='inp1' type={'text'} value={url.url} name='url' placeholder='Paste or type url...' onChange={e => handel(e)} />
                            <br/>
                            <input className='inp2' type='submit' value='GET' />
                        </form>
                    </div>
                </div>
                <div className='read2'>
                    {data.length ? (Data2(data)): (<h2>No data available</h2>)}
                </div>
            </div>
            <div style={{ backgroundColor: 'black', color: 'white', padding:"20px  0", width:'100%', margin:'auto' }}>
                <h1>CODE</h1>
                <p>
                    fetch("https://reqres.in/api/users?page=1")
                    .then(res => res.json())
                    .then(data => console.log(data))
                </p>
            </div>
        </div>
    )
}




const Data2 = (data) => {
    return(
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

export default Read;