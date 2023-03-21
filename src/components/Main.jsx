import { useState } from "react"
import MovieInfo from "./MovieInfo";
import OneMovie from "./OneMovie";
import SearchMovieByTitle from "./SearchMovieByTitle";

const Main = () => {

    const [MoviesByTitle, setMoviesByTitle] = useState([])
    const [show, setShow] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState({});


    const AllMoviesByTitle = (movies) => {
        setMoviesByTitle(movies)
    }

    const MovieInfromation = (res) => {
        setShow(!show)
        setSelectedMovie(res)
    }

    const goBack = () => {
        setShow(!show)
        setSelectedMovie({})
    }

  return (
    <div>
        {show && <SearchMovieByTitle AllMoviesByTitle={AllMoviesByTitle}/>}
        {show && <OneMovie MoviesFromTitle={MoviesByTitle} MovieInfromation={MovieInfromation}/>}
        {typeof selectedMovie.Title != "undefined" ? <MovieInfo selectedMovie={selectedMovie} goBack={goBack}/> : false}
    </div>
  )
}

export default Main