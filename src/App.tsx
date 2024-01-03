import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Listado } from './pages/Listado';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={ <Listado />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
