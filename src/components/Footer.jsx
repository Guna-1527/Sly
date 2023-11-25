
const Footer = () => {
  return (
    <div className="w-full h-[400px]">
        <div className="w-[1100px] m-auto flex py-[20px]">
            <div className="grow flex items-center">
                <img className="w[60px] h-[60px] object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png" alt="" />
                <h1 className="font-[800] text-[2rem] ml-4">SLY CRYPTO</h1>
            </div>
            <div className="flex-1">
                <p className="font-bold text-[1.3rem]">Links</p>
                <ul>
                    <li className="py-2 font-semibold">Home</li>
                    <li className="py-2 font-semibold">App</li>
                    <li className="py-2 font-semibold">Buy and Sell</li>
                    <li className="py-2 font-semibold">Pay for Business</li>
                    <li className="py-2 font-semibold">Margin Trading</li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="font-bold text-[1.3rem]">Prices</p>
                <ul>
                    <li className="py-2 font-semibold">Crypto Prices</li>
                    <li className="py-2 font-semibold">Bitcoin Price</li>
                    <li className="py-2 font-semibold">Ethereum Price</li>
                    <li className="py-2 font-semibold">Site Widgets</li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="font-bold text-[1.3rem]">News</p>
                <ul>
                    <li className="py-2 font-semibold">What&apos;s Trending</li>
                    <li className="py-2 font-semibold">Market Updates</li>
                    <li className="py-2 font-semibold">Product News</li>
                    <li className="py-2 font-semibold">Company News</li>
                    <li className="py-2 font-semibold">Events</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer