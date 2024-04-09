import React, { useState } from "react";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ai = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const handleAi = () => {
    if (toggleSwitch) {
      setToggleSwitch(false);
    } else {
      setToggleSwitch(true);
    }
  };

  return (
    <div
      className="flex cursor-pointer items-center lg:text-base text-xs"
      onClick={handleAi}
    >
      <div
        className={`${
          toggleSwitch ? "block" : "hidden"
        } text-lg transition duration-200`}
      >
        <FontAwesomeIcon icon={faToggleOn} />
      </div>
      <div
        className={`${
          toggleSwitch ? "hidden" : "block"
        } text-lg transition duration-200`}
      >
        <FontAwesomeIcon icon={faToggleOff} />
      </div>
      Ai Assistant
    </div>
  );
};

export default Ai;
