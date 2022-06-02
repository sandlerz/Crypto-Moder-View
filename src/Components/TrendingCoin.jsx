import { arrow } from '../Assets/Images/Util/index'

export default function TrendingCoin({ data }) {
  const { icon, priceChange1d, symbol } = data
  return (
    <div className="trendingCoin">
      <span className="trendingCoin__name">({symbol})</span>
      <div className="trendingCoin__img">
        <img src={icon} alt="" />
      </div>
      <div className="trendingCoin__price">
        <div className="trendingCoin__price__img green__img">
          <img src={arrow} alt="" />
        </div>
        <span className="trendingCoin__price__num green">{priceChange1d}%</span>
      </div>
      <div className="trendingCoin__save"></div>
    </div>
  )
}
