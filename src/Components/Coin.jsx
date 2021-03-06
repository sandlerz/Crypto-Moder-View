import { useEffect } from 'react'
import { arrow } from '../Assets/Images/Util/index'
import { cutDecimals } from '../Util/Util'
import SaveIcon from './SaveIcon'

export default function Coin({ data }) {
  const {
    name,
    symbol,
    icon,
    price,
    priceChange1d,
    priceChange1w,
    websiteUrl,
  } = data

  const colorPriceChange1d = Math.sign(priceChange1d) === 1 ? 'green' : 'red'
  const colorPriceChange1w = Math.sign(priceChange1w) === 1 ? 'green' : 'red'

  useEffect(() => {
    const priceElement = document.getElementById(
      `coin__top__title__price__${symbol}`
    )
    priceElement.classList.add('coin-change-price-animation')
    const clearTime = setTimeout(() => {
      priceElement.classList.remove('coin-change-price-animation')
    }, 300)

    return () => clearTimeout(clearTime)
  }, [price, symbol])

  return (
    <div className="coin">
      <div className="coin__top">
        <a
          className="coin__top__img"
          href={websiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img src={icon} alt="" />
        </a>
        <div className="coin__top__title">
          <a
            className="coin__top__title__name"
            href={websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            {name} <span>({symbol})</span>
          </a>
          <span>
            ${' '}
            <span id={`coin__top__title__price__${symbol}`}>
              {cutDecimals(price)}
            </span>
          </span>
        </div>
        <SaveIcon measure="medium" data={data} />
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
