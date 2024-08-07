import React from "react";
import WalletLogo from "../../assets/Header/wallte.png"; // Replace with your actual wallet logo path
import AccountLogo from "../../assets/Header/account.png"; // Adjust the path based on your actual folder structure
import DownArrowIcon from "../../assets/Header/down-arrow.png";

const Header = () => {
  return (
    <header className=" fixed  min-w-full   bg-blue-800 text-white p-4 flex items-center">
      {/* Left Section */}
      <div className="flex items-center justify-start w-1/3">
        <h1 className="text-2xl md:text-2xl lg:text-3xl">Opinion Trading</h1>
      </div>

      {/* Center Section */}
      <div className=" flex items-center  justify-end lg:justify-center w-1/3 ">
        <div className="bg-white space-x-3 rounded-lg p-2 flex items-center">
          <img src={WalletLogo} alt="Wallet Logo" className="h-8" />
          <div className="flex items-center">
            <span className="ml-2 font-semibold text-black">₹1250</span>
            <img src={DownArrowIcon} alt="Down Arrow" className="h-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end w-1/3">
        <img src={AccountLogo} alt="Account Logo" className="h-14" />
      </div>
    </header>
  );
};

export default Header;
