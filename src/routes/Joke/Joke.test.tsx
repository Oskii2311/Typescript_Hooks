import React from 'react';
import Joke from './Joke';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import JokeApi from './../../common/__MOCKS__/JokeApi';

describe('Joke', () => {
    test('Should render Button and proper text', () => {
        const api = new JokeApi();
        const { getByText } = render(<Joke api={api} />);

        expect(getByText("You haven't loaded any joke yet!")).toBeTruthy();
        expect(getByText('Fetch Joke')).toBeTruthy();
    });

    test('Should set spinner if joke is fetching', () => {
        const api = new JokeApi();
        const { getByTestId, getByText } = render(<Joke api={api} />);
        const button = getByText('Fetch Joke');

        fireEvent.click(button);
        const spinner = getByTestId('spinner');

        waitForElement(() => {
            expect(spinner).toBeTruthy();
        });
        waitForElement(() => {
            expect(getByText('funny joke')).toBeTruthy();
            expect(spinner).toBeFalsy();
        });
    });
});
