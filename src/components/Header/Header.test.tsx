import React from 'react';
import Header from './Header';
import { render } from 'react-testing-library';

describe('Header', () => {
    test('Should render Header with proper children', () => {
        const { getByText } = render(<Header>Test Header</Header>);

        expect(getByText('Test Header')).toBeTruthy();
    });
});
