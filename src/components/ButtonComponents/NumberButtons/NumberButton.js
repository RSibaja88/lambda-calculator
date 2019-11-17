import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = props => {
  return (
    <button> {props.number} </button>
  );
};
export default NumberButton;