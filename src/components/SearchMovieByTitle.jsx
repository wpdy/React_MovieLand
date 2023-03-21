import { useRef } from 'react'
import GetMoviesByTitle from '../services/GetMoviesByTitle';

const SearchMovieByTitle = ({AllMoviesByTitle}) => {

    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current.value === '') {
            alert('Please fill search field:)')
        }
        else {
            GetMoviesByTitle(inputRef.current.value).then(res => {
                console.log(res)
                AllMoviesByTitle(res)
            })
            inputRef.current.value = ''
        }
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