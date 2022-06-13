import { useSelector } from 'react-redux'
import Coin from '../../Components/Coin'
import CurrentBTC from '../../Components/CurrentBTC'
import { selectSaveCoins } from './SaveSlice'

export default function Save() {
  const saveCoins = useSelector(selectSaveCoins)
  const mapSaveCoins = saveCoins.map(data => <Coin data={data} key={data.id} />)

  return (
    <main className="simply-page">
      <div className="simply-page__top">
        <h1>Save coins</h1>
        <CurrentBTC />
      </div>
      <section className="simply-page__container">{mapSaveCoins}</section>
    </main>
  )
}
