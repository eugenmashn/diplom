import React from 'react';
import './App.css';
import AppToolbar from './components/ui/AppToolbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/pages/Auth/Login';
import {ProtectedRoute} from './components/routes/ProtectedRoute';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AppBar from '@mui/material/AppBar';


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <AppBar position='absolute'>
                    <header><AppToolbar></AppToolbar></header>
                </AppBar>

                <Routes>
                    <Route path='/' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
                        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
                        </Route>
                    </Route>
                    <Route path='/login' element={<Login/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
