import * as React from 'react';
import * as SC from './styles';

const Loader = () => {
    return (
        <SC.Loader viewBox="0 0 50 50" data-testid="spinner">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
            />
        </SC.Loader>
    );
};

export default Loader;
