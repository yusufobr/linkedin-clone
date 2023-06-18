import React from "react";
import "./InputOption.css";

function InputOption({ Icon, text, color }) {
  return (
    <div className="inputOption">
      {Icon && <Icon style={{ color: color }} />}
      <h4 className="inputOptionText">{text}</h4>
    </div>
  );
}

export default InputOption;
