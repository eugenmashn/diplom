import React from 'react';
import './App.css';
import AppToolbar from './components/ui/app-toolbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dashboard} from '@mui/icons-material';
import Login from './components/pages/Auth/Login';
import {ProtectedRoute} from './components/routes/ProtectedRoute';


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <header><AppToolbar></AppToolbar></header>
                <Routes>
                    <Route path='/' element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>}>
                        <Route path='/home' element={<Login/>}>
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
