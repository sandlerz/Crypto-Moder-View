import { bookMark, bookMarkFilling } from '../Assets/Images/Util'
import { useDispatch, useSelector } from 'react-redux'
import { addSave, removeSave } from '../Pages/Save/SaveSlice'
import { selectSaveCoins } from '../Pages/Save/SaveSlice'

export default function SaveIcon({ data }) {
  const dispatch = useDispatch()
  const saveCoins = useSelector(selectSaveCoins)
  const isSave = saveCoins.some(coin => coin === data)

  const handleSave = () => {
    if (isSave) {
      dispatch(removeSave(data.id))
    } else {
      dispatch(addSave(data))
    }
  }

  return (
    <div className="save-icon" onClick={handleSave}>
      <img src={isSave ? bookMarkFilling : bookMark} alt="" />
    </div>
  )
}
