import axios from "axios";
import { useEffect, useState } from "react";

const PriceStat = () => {
  const [coins, setCoins] = useState([]);
  const [NewCoins, SetNewCoins] = useState([]);

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
        "https://api.coinranking.com/v2/stats",
        options
      );
      setCoins(res.data.data.bestCoins);
    };
    fetchData();
  }, []);

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
        "https://api.coinranking.com/v2/stats",
        options
      );
      SetNewCoins(res.data.data.newestCoins);
    };
    fetchData();
  }, []);

  return (
    <div className="py-[20px]">
      <h1 className="font-bold text-[2rem] py-[10px]">Top Trending</h1>
      <div className="flex justify-around mt-7">
        {
            coins.map((c, i) => (
                <div key={i} className="w-[300px] py-[20px] bg-slate-200 rounded-md flex items-center justify-around">
                    <img className="w-[60px] h-[70px] ml-[15px] object-contain" src={c.iconUrl} alt="" />
                    <div className="flex-1 ml-[20px]">
                    <h1 className="font-bold text-[1.23rem]">{c.name}</h1>
                    <p>{c.symbol}</p>
                    </div>
                </div>
            ))
        }
      </div>


      <h1 className="font-bold text-[2rem] mt-3 py-[20px]">New To Market</h1>
      <div className="flex justify-around mt-7">
        {
            NewCoins.map((c, i) => (
                <div key={i} className="w-[300px] py-[20px] bg-slate-200 rounded-md flex items-center justify-around">
                    <img className="w-[60px] h-[70px] ml-[15px] object-contain" src={c.iconUrl} alt="" />
                    <div className="flex-1 ml-[20px]">
                    <h1 className="font-bold text-[1.23rem]">{c.name}</h1>
                    <p>{c.symbol}</p>
                    </div>
                </div>
            ))
        }
      </div>

     

    </div>
  );
};

export default PriceStat;
