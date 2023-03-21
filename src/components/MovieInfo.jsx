
const MovieInfo = ({selectedMovie, goBack}) => {
    // console.log(selectedMovie.Title)
    return (
        <div className="movieinfo">
            <h1>{selectedMovie.Title} ({selectedMovie.Year})</h1>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title}/>
            <div>
                <p><strong>Plot: </strong>{selectedMovie.Plot}</p>
                <p><strong>Genre: </strong>{selectedMovie.Genre}</p>
                <p><strong>Actors: </strong>{selectedMovie.Actors}</p>
                <p><strong>Writer: </strong>{selectedMovie.Writer}</p>
                <p><strong>Runtime: </strong>{selectedMovie.Runtime}</p>
                <p><strong>Released: </strong>{selectedMovie.Released}</p>
                <p><strong>Production: </strong>{selectedMovie.Production}</p>
            </div>
            
            <button className="button" onClick={goBack}>BACK</button>
        </div>
    )
}
export default MovieInfo;