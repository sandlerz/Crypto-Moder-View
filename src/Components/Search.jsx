import { search } from '../Assets/Images/Util/index'

export default function Search() {
  return (
    <div className="search">
      <div className="search__icon">
        <img src={search} alt="" />
      </div>
      <input type="text" className="search__input" />
    </div>
  )
}
