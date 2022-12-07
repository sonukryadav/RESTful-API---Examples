import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Read from './Read';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/read' element={<Read />}></Route>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </div>
    )
}

export default Routing
