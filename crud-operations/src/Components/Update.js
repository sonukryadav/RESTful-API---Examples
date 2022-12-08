import React, { useState, useEffect } from 'react'

const Update = () => {


    const PUT = () => {
        fetch(`http://localhost:3002/data/1`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: 'sonu',
                mob: '123456789',
                vil:'25sd'
            }),
        }
        ).then((res) => res.json()).then((data) => console.log(data));
        alert("PUT");
    }

    const PATCH = () => {
        fetch(`http://localhost:3002/data/1`, {
            method: 'PATCH',
            headers: {
                Accept : 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                age:'23'
            }),
        }
        ).then((res) => res.json()).then((data) => console.log(data));
        alert("PATCH");
    }

    return (
        <div>
            <button onClick={PUT}>PUT</button>
            <hr/>
            <button onClick={PATCH}>PATCH</button>
        </div>
    )
}

export default Update
