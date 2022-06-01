import { search } from '../Assets/Images/Util/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectCoinsFilter, setFilter } from '../Pages/Main/MainSlice'

export default function Search() {
  const filter = useSelector(selectCoinsFilter)
  const dispatch = useDispatch()

  const handleText = event => {
    const { value } = event.target
    dispatch(setFilter(value))
  }

  return (
    <div className="search">
      <div className="search__icon">
        <img src={search} alt="" />
      </div>
      <input
        type="text"
        className="search__input"
        placeholder="Search for currencies"
        onChange={handleText}
        value={filter}
      />
    </div>
  )
}
