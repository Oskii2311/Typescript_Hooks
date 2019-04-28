import { JOKE_URL } from '../../constants/urls';
import IJokeApi from './JokeApiInterface';

class JokeApi implements IJokeApi {
    private url = '';
    constructor() {}

    async fetchJoke() {
        this.url = JOKE_URL;
        const joke = await fetch(this.url);
        const json = await joke.json();

        return json;
    }
}

export default JokeApi;
