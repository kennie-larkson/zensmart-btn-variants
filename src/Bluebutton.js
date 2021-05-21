import React from "react";

function Bluebutton({text, color, weight}) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        style={{
          margin: "1em",
          backgroundColor: "blue",
          color: `${color}`,
          fontWeight: `${weight}`
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Bluebutton;
