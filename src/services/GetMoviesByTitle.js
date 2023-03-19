const GetMoviesByTitle = async(MoviesTitle) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=138afb32&s=${MoviesTitle}`)
    const movies = await response.json()
    return movies
}

export default GetMoviesByTitle
