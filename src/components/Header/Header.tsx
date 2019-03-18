import React from 'react';
import * as SC from './styles';

interface IProps {
    children: string;
}

const Header = (props: IProps) => {
    const { children } = props;

    return <SC.Header>{children}</SC.Header>;
};

export default Header;
