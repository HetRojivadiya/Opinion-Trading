import React, { useState } from "react";
import WalletLogo from "../../assets/Header/wallte.png";
import AccountLogo from "../../assets/Header/account.png";
import DownArrowIcon from "../../assets/Header/down-arrow.png";
import DepositImage from '../../assets/Header/deposite_withdraw.jpg';
import CompanyLogo from '../../assets/Logo/logo.jpg';
import Modal from "../Header/Modal"; // Import the Modal component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white p-4 flex items-center">
        {/* Left Section */}
        <div className="flex items-center justify-start w-1/3">
  <img src={CompanyLogo} alt="Company Logo" className="h-16" />
  <h1 className="text-2xl md:text-2xl lg:text-3xl ml-2 hide-on-small">
    Opinion 
  </h1>
</div>



        {/* Center Section */}
        <div
          className="flex items-center justify-center w-1/3 cursor-pointer"
          onClick={handleModalOpen}
        >
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

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Deposit / Withdraw"
      >
        <div className="flex flex-col items-center">
          {/* Displaying the image */}
          <img src={DepositImage} alt="Deposit and Withdraw" className="mb-4 w-full rounded-lg" />
          
          {/* Deposit and Withdraw buttons */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2 w-full"
            onClick={() => alert("Deposit Functionality")}
          >
            Deposit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
            onClick={() => alert("Withdraw Functionality")}
          >
            Withdraw
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
