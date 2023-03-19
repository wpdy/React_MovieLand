import { useState } from "react"
import GetMovieByID from "../services/GetMovieByID";
import MovieInfo from "./MovieInfo";
import OneMovie from "./OneMovie";
import SearchMovieByTitle from "./SearchMovieByTitle";

const Main = () => {

    const [MoviesFromTitle, setMoviesFromTitle] = useState([])
    const [show, setShow] = useState(true)
    const [chosen, setChosen] = useState({});


    const setResults = (movies) => {
        setMoviesFromTitle(movies)
    }

    const moreMovie = (id) => {
        GetMovieByID(id).then(res => {
            setShow(!show)
            setChosen (res)
        })
    }
    
  

    const goBack = () => {
        setShow(!show)
        setChosen({})
    }

  return (
    <div>
        {show && <SearchMovieByTitle setResults={setResults}/>}
        {show && <OneMovie MoviesFromTitle={MoviesFromTitle} moreMovie={moreMovie}/>}
        {(typeof chosen.Title != "undefined") ? <MovieInfo chosen={chosen} goBack={goBack}/> : false}
    </div>
  )
}

export default Main