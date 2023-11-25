
const Mobile = () => {
  return (
    <div className="w-full h-[100vh] mt-[40px]">
      <div className="text-center font-bold text-[40px] pt-5">Mobile</div>
      <div className="mt-[50px]">
      <div className="w-[1100px] m-auto flex justify-between items-center">
        <div className="LeftMobile">
            <h5 className="font-bold">SLY CRYPTO</h5>
            <h1 className="text-[5rem] font-bold">DeFi Made Simple</h1>
            <p className="text-[1.2rem] py-2">DeFi Wallet. <span className="text-slate-600">Your Keys, Your Crypto</span></p>
            <p className="text-[1.2rem] py-2">DeFi Earn. <span className="text-yellow-400">No lock-up period and stable returns.</span></p>
            <p className="text-[1.2rem] py-2">DeFi Swap. <span className="text-blue-600">Swap DeFi coins and earn Triple Yield.</span></p>
            <div className="w-[120px] mt-[30px] h-[60px]">
              <img className="object-contain" src="https://mt11-html-images.s3.ap-south-1.amazonaws.com/android_app_btn.png" alt="" />
            </div>
        </div>
        <div className="w-[450px] mr-[130px]">
          <img src="https://www.bitcoin.com/static/de76dd78681ca1f97d7f0c9d6a20c4bf/4e1db/hero-image.png" alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Mobile