import React from "react";

const PopUp = ({ success }) => {
  return (
    <>
      {success ? (
        <div
          id="popup"
          class="bg-green-100  left-1/2 -translate-x-1/2 z-50 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-20 w-11/12 justify-between sm:w-fit flex"
          role="alert"
        >
          <p class="font-medium">Mail envoyé avec succès</p>
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
      ) : (
        <div
          id="popup"
          class="bg-red-100  left-1/2 -translate-x-1/2 z-50 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-20 w-11/12 justify-between sm:w-fit flex"
          role="alert"
        >
          <p class="font-medium">Mail envoyé avec succès</p>
          <button class="ml-2 border border-red-400">
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
      )}
    </>
  );
};

export default PopUp;
