import React from "react";

function Greybutton({ text, color, weight }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-light btn-lg"
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

export default Greybutton;
