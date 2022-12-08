import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Read from './Read';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/read' element={<Read />}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path='/update' element={<Update />}></Route>
                <Route path='/delete' element={<Delete />}></Route>
                <Route></Route>
            </Routes>
        </div>
    )
}

export default Routing
