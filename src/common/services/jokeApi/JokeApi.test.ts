import JokeApi from './../../__MOCKS__/JokeApi';
import JOKE from './../../__MOCKS__/JokeApiRespone';

describe('JokeApi', () => {
    test('Should fetch joke', async () => {
        const api = new JokeApi();

        const joke = await api.fetchJoke();

        expect(joke).toEqual(JOKE);
    });
});
