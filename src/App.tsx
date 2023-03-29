import List from './components/List'
import dataStore from './store/store';
import React from "react";
import {  Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import './App.css'


function App() {
    
    return (
        <Routes>
            <Route path='/' element={<List number={dataStore}/>}/>
                <Route path=':id' element={<NewsPage/>}/>
        </Routes>
    );
}

export default App;
