import PriceBody from "../components/PriceBody";
import PriceHeader from "../components/PriceHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import PriceStat from "../components/PriceStat";
const Price = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[1300px] m-auto">
        <PriceHeader />
        <PriceStat />
        <PriceBody />
        <Footer />
      </div>
    </div>
  );
};

export default Price;
