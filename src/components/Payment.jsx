import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Payment = () => {
  return (
    <div className="w-full h-[100vh] bg-black">

      <div className="w-[1100px] m-auto">
        <div className="text-center font-bold text-[40px] pt-[15px] text-white">
          Choose Your Payment.
        </div>
      </div>

      <div className="w-full h-screen flex justify-center items-center flex-col mt-[-100px]">
        <p className="text-white">CRYPTO.COM VISA CARD</p>
        <h1 className="text-[3rem] font-bold text-white">The only crypto card you need</h1>
        <p className="text-white font-semibold ">Enjoy up to 5% back on all spending with your sleek, pure metal card.
No annual fees. Top-up with fiat or crypto.</p>
    <button className="mt-[20px] border-solid border-2 px-[15px] py-[10px] rounded-full text-white font-bold hover:bg-white hover:text-black ease-in duration-200">Choose Your Payment <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></button>
      </div>
    </div>
  );
};

export default Payment;
