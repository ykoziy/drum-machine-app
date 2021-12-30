import React from "react";

const DrumMachine = (props) => {
  return(
    <div className="drum-machine">
        {props.left}
        {props.right}
    </div>
  );
}

export default DrumMachine;