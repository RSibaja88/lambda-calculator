import React from "react";


const NumberButton = (props) => {
  // console.log(props.numbers);
  return (
        <button className="clickedValue" 
          onClick={() => 
          props.setValue(props.numbers)}> 
    {props.numbers}
    </button>
  );
};
export default NumberButton;