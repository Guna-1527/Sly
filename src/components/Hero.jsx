import { Navigate } from "react-router-dom";
const Hero = () => {
  const HandleClick = () => {
    Navigate(`/crypto-price`);
  }
  return (
    <div className="w-full h-[90vh] relative">
      <div className="w-[1100px] mt-[80px] m-auto flex justify-between items-center">
        <div className="LeftHero flex flex-1 flex-col">
          <p className="font-semibold text-lg">High Risk = High Yields.</p>
          <h1 className="text-[3.5rem] font-bold">Private, Secure Borderless Crypto Payments</h1>
          <p className="font-semibold text-[20px] text-slate-500">Your crypto journey starts here.</p>
          <p></p>
          <button onClick={HandleClick} className="flex border-solid outline-none border-2 px-3 py-2 rounded-md w-[100px] items-center justify-center mt-[30px] bg-black text-white">Explore</button>
        </div>
        <div className="RightHero flex flex-1 ">
          <img src="https://devexperts.com/app/uploads/2019/08/prime-xbt.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
