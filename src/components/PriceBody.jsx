import axios from "axios";
import { useEffect, useState } from "react";

const PriceBody = () => {
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
        "https://api.coinranking.com/v2/coins",
        options
      );
      setCoins(res.data.data.coins);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-[14px] mb-[20px]">
      <h1 className="text-[2rem] font-bold">
        Today&apos;s Cryptocurrency Prices
      </h1>
      <div className="">
        <table className="w-full shadow-lg mt-[20px] border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                S.no
              </th>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                Icon
              </th>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                Name
              </th>

              <th className="bg-slate-500 text-left text-white px-8 py-4">
                Price
              </th>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                24H Change
              </th>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                24H Volume
              </th>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                Market Cap
              </th>
              <th className="bg-slate-500 text-left text-white px-8 py-4">
                Rank
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={index} className="hover:bg-slate-100 cursor-pointer">
                <td className="border-y-2 px-8 py-4">
                  <p className="">{index + 1}</p>
                </td>
                <td className="border-y-2 px-8 py-4">
                  <img className="w-[30px]" src={coin.iconUrl} alt="" />
                </td>
                <td className="border-y-2 font-semibold px-8 py-4">
                  {coin.name}
                </td>
                <td className="border-y-2 font-semibold px-8 py-4">
                  $ {coin.price}
                </td>
                <td className="border-y-2 px-8 py-4">
                  <p
                    className={`${
                      coin.change < 0
                        ? "text-red-500 font-bold"
                        : "text-green-700 font-bold"
                    }`}
                  >
                    {coin.change}%
                  </p>
                </td>
                <td className="border-y-2 px-8 py-4">{coin.volume}</td>
                <td className="border-y-2 font-semibold px-8 py-4">
                  {coin.marketCap}
                </td>
                <td className="border-y-2 font-semibold px-8 py-4">
                  {coin.rank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceBody;
