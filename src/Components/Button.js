import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" sticky p-2 px-6 m-2 rounded-lg bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
