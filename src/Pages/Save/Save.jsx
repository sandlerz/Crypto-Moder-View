import { useSelector } from 'react-redux'
import Coin from '../../Components/Coin'
import { selectSaveCoins } from './SaveSlice'

export default function Save() {
  const saveCoins = useSelector(selectSaveCoins)
  const mapSaveCoins = saveCoins.map(data => <Coin data={data} key={data.id} />)

  return (
    <main className="save-coins">
      <h1>Save coins</h1>
      <section className="save-coins__coins">{mapSaveCoins}</section>
    </main>
  )
}
