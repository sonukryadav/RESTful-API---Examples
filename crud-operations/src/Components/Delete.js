import React from 'react'

const Delete = () => {

    const delete1 = () => {
        fetch(`http://localhost:3002/data/21`, {
            method: 'DELETE',
        }).then((res) => res.json()).then((data) => console.log(data));
        alert("Delete");
    }

    return (
        <div>
            <buttonZ onClick={delete1}>Click</buttonZ>
        </div>
    )
}

export default Delete
