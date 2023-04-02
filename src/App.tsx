import React from "react";
import { Routes, Route } from 'react-router-dom';

import NewsPage from './pages/NewsPage/NewsPage';
import MainPage from './pages/MainPage/MainPage';

import './App.css'


const App:React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
                <Route path=':id' element={<NewsPage/>}/>
        </Routes>
    );
}

export default App;
