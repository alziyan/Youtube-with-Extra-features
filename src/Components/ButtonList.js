import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex z-0">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Popular" />
      <Button name="India" />
      <Button name="Songs" />
      <Button name="Cricket" />
      <Button name="Politics" />
      <Button name="Valentine" />
    </div>
  );
};

export default ButtonList;
