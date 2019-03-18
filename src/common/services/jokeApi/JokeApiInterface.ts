interface IJokeApi {
    fetchJoke: () => Promise<{ id: string; value: string }>;
}

export default IJokeApi;
