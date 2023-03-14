import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CalculateFibonacci from './CalculateFibonacci';
import CalculateWithWebworker from './CalculateWithWebworker';

const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path={'/'} Component={CalculateFibonacci}></Route>
            <Route path={'/worker'} Component={CalculateWithWebworker}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Home;
