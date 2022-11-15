import React from "react";

const PopUp = ({ success, errorMessage }) => {
  return (
    <div
      id="popup"
      className={`
            ${
              success
                ? `bg-blue-400  left-1/2 -translate-x-1/2 z-50 border border-blue-400 text-blueish px-4 py-3 rounded fixed top-20 w-11/12 justify-center sm:w-fit flex duration-200 text-center`
                : `bg-blue-100  left-1/2 -translate-x-1/2 z-50 border 
                border-blue-400 text-blueish px-4 py-3 rounded fixed -top-20 w-11/12 justify-center sm:w-fit flex duration-200`
            }`}
      role="alert"
    >
      <p className="font-medium">{errorMessage}</p>
    </div>
  );
};

export default PopUp;
