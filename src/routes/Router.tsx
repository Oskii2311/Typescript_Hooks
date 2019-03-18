import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Joke from './Joke/Joke';
import withApi from '../hocs/withApi';

const JokeWithApi = withApi(Joke);

const Router = () => (
    <BrowserRouter>
        <>
            <Header>Get ready to have some fun?</Header>
            <Route path="/" component={JokeWithApi} />
        </>
    </BrowserRouter>
);

export default Router;
