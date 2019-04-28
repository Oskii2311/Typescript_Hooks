import React from 'react';
import Loader from './../components/Loader/Loader';

interface IWithLoadingProps {
    isLoading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & IWithLoadingProps> {
        public render() {
            const { isLoading } = this.props;
            return (
                <>{isLoading ? <Loader /> : <Component {...this.props} />}</>
            );
        }
    };

export default withLoading;
