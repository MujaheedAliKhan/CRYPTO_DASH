import { Link } from "react-router";

const CardCoin = ({coin}) => {
  return (
    <>
      <Link to={`/coin/${coin.id}`}>
        {/* if i do this it get the card details of particular id which i have selected */}
        <div className="coin-card">
        <div className="coin-header">
          <img src={coin.image} alt={coin.name} className="coin-image" />
          <div>
            <h2>{coin.name}</h2>
            <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div>
          <p>Price: ${coin.current_price.toLocaleString()}</p>
        </div>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
         24h Changes:{coin.price_change_percentage_24h.toFixed(2)} %{" "}
        </p>
        <p>Market Cap: {coin.market_cap}</p>
      </div>
      </Link>
    </>
  );
};

export default CardCoin;
