import React from "react";
import Bluebutton from "./Bluebutton";
import Skybluebutton from "./Skybluebutton";
import Greybutton from "./Greybutton";

function ButtonContainer({ data }) {
  const { text, color, weight } = data;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifySelf: "center",
        marginTop: "5em",
      }}
    >
      <Skybluebutton text={text} color={color} weight={weight} />
      <Bluebutton text={text} color={color} weight={weight}/>
      <Greybutton text={text} color={color} weight={weight}/>
    </div>
  );
}

export default ButtonContainer;
