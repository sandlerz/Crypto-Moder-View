import { useSelector } from 'react-redux'
import Coin from '../../Components/Coin'
import { selectSaveCoins } from './SaveSlice'

export default function Save() {
  const saveCoins = useSelector(selectSaveCoins)
  const mapSaveCoins = saveCoins.map(data => <Coin data={data} key={data.id} />)

  return (
    <main className="simply-page">
      <h1>Save coins</h1>
      <section className="simply-page__container">{mapSaveCoins}</section>
    </main>
  )
}
