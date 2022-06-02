import { arrow } from '../Assets/Images/Util/index'

export default function TrendingCoin({ data }) {
  const { icon, priceChange1d } = data
  return (
    <div>
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <div>
          <img src={''} alt="" />
        </div>
        <span>{priceChange1d}</span>
      </div>
    </div>
  )
}
