import { useEffect, useState } from "react";
import axios from "axios";

const PriceHeader = () => {
    const [coins, setCoins] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "coinranking8aac64e85bfcdaf44803be610494ee50e5a34e065b13ddfe",
      },
    };

    const fetchData = async () => {
      const res = await axios.get(
        "https://api.coinranking.com/v2/coins?limit=1",
        options
      );
      setCoins(res.data.data.coins);
    };
    fetchData();
  },[]);
  return (
    <div className="w-full h-auto">
      {coins.map((coin, i) => (
        <div className="w-[1100px] pt-[10px] m-auto flex justify-between" key={i}>
          <p className="text-slate-500 font-bold">Coin: <span className="text-black">{coin.name}</span></p>
          <p className="text-slate-500 font-bold">Market Cap: <span className="text-black">{coin.marketCap}</span></p>
          <p className="text-slate-500 font-bold">24h Change: <span className={`${coin.change < 0 ? "text-red-500 font-bold" : "text-green-600 font-bold"}`}>{coin.change}%</span></p>
          <p className="text-slate-500 font-bold">Price: <span className="text-black">{coin.price}</span></p>
          <p className="text-slate-500 font-bold">Dominance: <span className="text-black">{coin.rank}</span></p>
          <p className="text-slate-500 font-bold"><span><a className="text-black underline" href={coin.coinrankingUrl} target="_blank" rel="noopener noreferrer">Watch Coin Rank</a></span></p>
        </div>
      ))}
    </div>
  )
}

export default PriceHeader