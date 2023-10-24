import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExcelReader from './components/ExcelReader';
import MainDisplay from './components/MainDisplay';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    return (
        <Router>
            <div className='App'>
                <NavBar />
                <Routes>
                    <Route
                        exact path='/'
                        element={<ExcelReader setData={setData} />}
                    />
              
                    <Route
                        path='/lessons'
                        element={<MainDisplay data={data} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
