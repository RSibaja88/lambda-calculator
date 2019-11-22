import React, {useState} from "react";
import {numbers} from "../../data";
import NumberButton from "../ButtonComponents/NumberButtons/NumberButton";
import Number from '../ButtonComponents/NumberButtons/Numbers';
// import Numbers from "../ButtonComponents/NumberButtons/Numbers";
// import NumberButton from "../ButtonComponents/NumberButtons";


// const Display = (props) => {
// return (
//   <>
// <div className="display">{props.numbers}</div>
//   </>
//   );
// };

const Display = props => {
  return <div className="display">{props.displayValue}</div>;
 
};



export default Display;