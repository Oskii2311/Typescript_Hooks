import JOKE from './JokeApiRespone';
import IJokeApi from '../services/jokeApi/JokeApiInterface';

class JokeApi implements IJokeApi {
    async fetchJoke() {
        return Promise.resolve(JOKE);
    }
}

export default JokeApi;
