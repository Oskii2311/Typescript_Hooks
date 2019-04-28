import React from 'react';
import { render } from 'react-testing-library';
import withLoading from './withLoading';

const testDiv = () => <div>test</div>;

describe('withLoading', () => {
    test('Should render Loader if isLoading is true', () => {
        const TestWithLoading = withLoading(testDiv);
        const { getByTestId } = render(<TestWithLoading isLoading={true} />);

        expect(getByTestId('spinner')).toBeTruthy();
    });

    test('Should render Component if isLoading is  false', () => {
        const TestWithLoading = withLoading(testDiv);
        const { getByText } = render(<TestWithLoading isLoading={false} />);

        expect(getByText('test')).toBeTruthy();
    });
});
