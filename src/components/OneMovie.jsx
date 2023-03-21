import GetMovieByID from "../services/GetMovieByID"

const OneMovie = ({MoviesFromTitle, MovieInfromation}) => {

    const MoreInfo = (id) => {
        GetMovieByID(id).then(res => {
            MovieInfromation(res)
        })
    }

  return (
    <div className="movies_list">
        {
            MoviesFromTitle.Search?.map((item) => (
                <div key={item.imdbID} className='one_movie'>
                    <h3>{item.Title} {item.Year}</h3>
                    <img src={item.Poster} alt=""/>
                    <button className="button-92" onClick={() => MoreInfo(item.imdbID)}>MORE</button>
                </div>
            ))
        }
    </div>
  )
}

export default OneMovie