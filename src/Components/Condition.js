import React, { useState } from "react";
import Filter from "./Filter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { logicActions } from "../Redux/features/logicSlice";
import store from "../Redux/store";

const Condition = () => {

  const [radioValue, setRadioValue] = useState("&&");
  const radios = [
    { name: "AND", value: "&&" },
    { name: "OR", value: "||" },
  ];
 

  return (
    <div className=" border-2 absolute  top-1/4 w-3/4 inset-x-20 border-gray-400 shadow-lg">
      <div className="flex  align-middle   ">
        <ButtonGroup className="mb-3">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={() => store.dispatch(logicActions.Logic(radio.value))}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <div className="w-3 h-3 border-2 border-red top-3 rounded-md bg-gray-400 relative ml-2 ">
          <img
            src="https://i.pinimg.com/736x/8a/eb/5d/8aeb5d7a4b7acc97fc3cf8ac7e43a658.jpg"
            alt="err"
            className="w-full h-full bg-gray-400 text-gray-400 hover:cursor-pointer"
          />
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Condition;
