
const OneMovie = ({MoviesFromTitle, moreMovie}) => {
    // console.log(MoviesFromTitle)

  return (
    <div className="products_list">
        {
            MoviesFromTitle.Search?.map((item) => (
                <div key={item.imdbID} className='one_item'>
                    <h3>{item.Title}({item.Year})</h3>
                    <img src={item.Poster} alt=""/>
                    <button className="button-92" onClick={() => moreMovie(item.imdbID)}>MORE</button>
                </div>
            ))
        }
    </div>
  )
}

export default OneMovie