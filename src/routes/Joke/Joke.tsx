import React, { useCallback, useState } from 'react';
import JokeApiInterface from '../../common/services/jokeApi/JokeApiInterface';
import withLoading from '../../hocs/withLoading';
import * as SC from './styles';

const ButtonWithLoading = withLoading(SC.Button);

interface IProps {
    api: JokeApiInterface;
}

const Joke = (props: IProps) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [joke, setJoke] = useState<{ id: string; value: string } | null>(
        null,
    );
    const fetchJoke = useCallback(async () => {
        setLoading(true);

        const data = await props.api.fetchJoke();

        setJoke(data);
        setLoading(false);
    }, [props.api]);

    return (
        <SC.Container>
            <SC.Paper>
                <div>
                    {joke ? joke.value : "You haven't loaded any joke yet!"}
                </div>
                <ButtonWithLoading isLoading={isLoading} onClick={fetchJoke}>
                    Fetch Joke
                </ButtonWithLoading>
            </SC.Paper>
        </SC.Container>
    );
};

export default Joke;
