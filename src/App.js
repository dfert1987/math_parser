import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import MainDisplay from './components/MainDisplay';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Navigate to='/lessons/1/1' />} />

                    <Route
                        path='/lessons/:module/:lesson'
                        element={<MainDisplay />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
