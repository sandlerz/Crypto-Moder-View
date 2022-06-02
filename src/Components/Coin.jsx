import { arrow } from '../Assets/Images/Util/index'
import { cutDecimals } from '../Util/Util'

export default function Coin({ data }) {
  const { name, symbol, icon, price, priceChange1d, priceChange1w } = data

  const colorPriceChange1d = Math.sign(priceChange1d) === 1 ? 'green' : 'red'
  const colorPriceChange1w = Math.sign(priceChange1w) === 1 ? 'green' : 'red'

  return (
    <div className="coin">
      <div className="coin__top">
        <div className="coin__top__img">
          <img src={icon} alt="" />
        </div>
        <div className="coin__top__title">
          <span className="coin__top__title__name">
            {name} <span>({symbol})</span>
          </span>
          <span>$ {cutDecimals(price)}</span>
        </div>
        <div className="coin__top__save"></div>
      </div>
      <div className="coin__bottom">
        <span>24h %</span>
        <div className="coin__bottom__priceChange">
          <div
            className={`coin__bottom__priceChange__img ${colorPriceChange1d}__img`}
          >
            <img src={arrow} alt="" />
          </div>
          <span className={colorPriceChange1d}>{priceChange1d} %</span>
        </div>
        <span>7d %</span>
        <div className="coin__bottom__priceChange">
          <div
            className={`coin__bottom__priceChange__img ${colorPriceChange1w}__img`}
          >
            <img src={arrow} alt="" />
          </div>
          <span className={colorPriceChange1w}>{priceChange1w} %</span>
        </div>
      </div>
    </div>
  )
}
