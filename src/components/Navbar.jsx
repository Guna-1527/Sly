import {
  faHouse,
  faMobile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [value, setValue] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      setValue(data.user.displayName);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("displayName", data.user.displayName);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("displayName"));
  }, []);
  
  const HandleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  const Navigate = useNavigate();
  const HandleHomeRoute = () => {
    Navigate(`/`);
  };
  return (
    <div className="flex w-full h-[60px] shadow-xl">
      <div className="w-[1100px] m-auto flex justify-between items-center">
        <div
          onClick={HandleHomeRoute}
          className="w-[40px] h-[40px] cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
            alt=""
          />
        </div>
        <ul className="flex items-center">
          <li className="flex items-center ease-linear duration-150 font-bold hover:text-slate-600">
            <a className="mr-6" href="">
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              Home
            </a>
          </li>
          <li className="flex items-center ease-linear duration-150 font-bold hover:text-slate-600">
            <a className="mr-6" href="">
              <FontAwesomeIcon icon={faMobile} className="mr-2" /> App
            </a>
          </li>
          {value ? (
            <div onClick={HandleLogout} className="cursor-pointer">
              <h1 className="font-semibold">
                {value} <FontAwesomeIcon icon={faRightFromBracket} />
              </h1>
            </div>
          ) : (
            <div
              onClick={handleSignIn}
              className="px-5 py-2 rounded-lg border-solid border-2 bg-[#000000] border-black text-white cursor-pointer"
            >
              <p>Sign In</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
