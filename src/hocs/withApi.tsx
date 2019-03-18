import React from 'react';
import JokeApiInterface from '../common/services/jokeApi/JokeApiInterface';
import Api from '../common/services/jokeApi/JokeApi';

interface IWithApiProps {
    api: JokeApiInterface;
}

const api = new Api();

const withApi = <P extends object>(Component: React.ComponentType<P>) =>
    class WithApi extends React.Component<P & IWithApiProps> {
        public static defaultProps: Partial<IWithApiProps> = {
            api,
        };
        public render(): JSX.Element {
            return <Component {...this.props} />;
        }
    };

export default withApi;
