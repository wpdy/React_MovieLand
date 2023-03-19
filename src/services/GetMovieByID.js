const GetMovieByID = async (MovieId) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=138afb32&i=${MovieId}`);
    const movie = await response.json();
    return movie
}

export default GetMovieByID