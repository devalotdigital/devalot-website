import React from "react";

const PopUp = ({ success, errorMessage }) => {
  console.log(errorMessage);
  return (
    <div
      id="popup"
      className={`
            ${
              success
                ? "bg-green-100  left-1/2 -translate-x-1/2 z-50 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-20 w-11/12 justify-between sm:w-fit flex"
                : "bg-green-100  left-1/2 -translate-x-1/2 z-50 border border-green-400 text-green-700 px-4 py-3 rounded fixed -top-20 w-11/12 justify-between sm:w-fit flex duration-150"
            }`}
      role="alert"
    >
      <p class="font-medium">{errorMessage}</p>
      <button class="ml-2 border border-green-400">
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default PopUp;
