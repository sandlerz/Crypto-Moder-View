export default function Coin({ data }) {
  console.log(data)
  const { name, symbol, icon, price, priceChange1d, priceChange1w } = data
  return (
    <div>
      <div>
        <div>
          <img src={icon} alt="" />
        </div>
        <div>
          <span>
            {name} <span>{symbol}</span>
          </span>
          <span>$ {price}</span>
        </div>
        <div>save</div>
      </div>
      <div>
        <span>24h %</span>
        <div>
          <img src={''} alt="" />
        </div>
        <span>{priceChange1d}</span>
      </div>
      <div>
        <span>7d %</span>
        <div>
          <img src={''} alt="" />
        </div>
        <span>{priceChange1w}</span>
      </div>
    </div>
  )
}
