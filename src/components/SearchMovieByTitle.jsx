import { useRef } from 'react'
import GetMoviesByTitle from '../services/GetMoviesByTitle';

const SearchMovieByTitle = ({setResults}) => {

    const inputRef = useRef(null);

    function handleClick() {
        getMovieByTitle(inputRef.current.value)
        if (inputRef.current.value === '') {
            alert('Please fill search field:)')
        }
        inputRef.current.value = ''
        
    }

    const getMovieByTitle = (searchWord) => {
        GetMoviesByTitle(searchWord).then(res => {
            setResults(res)
        })
    }

  return (
    <div className='header'>
        <h1 className='title1'>MovieLand</h1>

        <input 
        ref={inputRef}
        type="text"
        placeholder='Search for movies'
        />

        <button onClick={handleClick}>SUMBIT</button>
    </div>
  )
}

export default SearchMovieByTitle