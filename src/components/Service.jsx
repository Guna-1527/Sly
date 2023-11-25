import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [coins, setCoins] = useState([]);
  const Navigate = useNavigate();

  const HandleClick = () => {
    Navigate(`/crypto-price`);
  }

  useEffect(() => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'coinranking8aac64e85bfcdaf44803be610494ee50e5a34e065b13ddfe',
      },
    };
    
    const fetchData = async () => {
      const res = await axios.get('https://api.coinranking.com/v2/coins?limit=5', options);
      setCoins(res.data.data.coins)
    }
    fetchData();
  },[]);

  return (
    <div className="w-full h-[100vh] bg-black text-white">
      <div className="w-[1100px] m-auto">
        <div className="text-center font-bold text-[40px] pt-[30px]">
          Buy Bitcoin, Ethereum, and 250+ cryptocurrencies.
        </div>

        <div className="flex items-center justify-center " onClick={HandleClick}>
          <button className="flex items-center border-solid border-2 px-[15px] mt-[30px] rounded-full  py-[10px] hover:bg-white hover:text-black duration-150 ease-in">
            <img className="object-contain" src="" alt="" />
            Check Crypto Pricing
            <FontAwesomeIcon icon={faArrowTrendUp} className="ml-3" />
          </button>
        </div>

        <div className="flex justify-center items-center mt-[100px]">
          <table className="shadow-lg w-[1000px] bg-black border-collapse">
            <thead>
            <tr>
              <th className="bg-black text-left text-slate-400 px-8 py-4">
                Icon
              </th>
              <th className="bg-black text-left text-slate-400 px-8 py-4">Symbol</th>
              <th className="bg-black text-left text-slate-400 px-8 py-4">Name</th>
              <th className="bg-black text-left text-slate-400 px-8 py-4">
                Market Cap
              </th>
              <th className="bg-black text-left text-slate-400 px-8 py-4">
                Price
              </th>
              <th className="bg-black text-left text-slate-400 px-8 py-4">Rank</th>
            </tr>
            </thead>
            <tbody>
            {coins.map((coin, index) => (
              <tr key={index}>
                <td className="border-y-2 px-8 py-4">
                  <img className="w-[30px]" src={coin.iconUrl} alt="" />
                </td>
                <td className="border-y-2 px-8 py-4">
                  {coin.symbol}
                </td>
                <td className="border-y-2 px-8 py-4">
                  {coin.name}
                </td>
                <td className="border-y-2 px-8 py-4">
                  {coin.marketCap}
                </td>
                <td className="border-y-2 px-8 py-4">
                  <p className={`${coin.change < 0 ? "text-red-500 font-bold" : "text-green-400 font-bold"}`}>{coin.change}%</p>
                </td>
                <td className="border-y-2 px-8 py-4">
                  {coin.rank}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Service;
