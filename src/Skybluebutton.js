import React from "react";

function Skybluebutton({ text, color, weight }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-info btn-lg"
        style={{
          margin: "1em",
          color: `${color}`,
          fontWeight: `${weight}`
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Skybluebutton;
