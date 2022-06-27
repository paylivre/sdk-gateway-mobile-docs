import React from "react";

import exampleBlue from "../../static/extras/customizing/customizing-example-color-blue.jpeg";
import exampleBlueWithKeyboard from "../../static/extras/customizing/customizing-example-color-blue-keyboard.jpeg";
import exampleGreen from "../../static/extras/customizing/customizing-example-color-green.jpeg";
import exampleGreenWithKeyboard from "../../static/extras/customizing/customizing-example-color-green-keyboard.jpeg";
import exampleRed from "../../static/extras/customizing/customizing-example-color-red.jpeg";
import exampleRedWithKeyboard from "../../static/extras/customizing/customizing-example-color-red-keyboard.jpeg";

export default function GenericCustomizingImage(props) {
  // object literal to help switching between types of logo images based on the passed prop
  const sourceImgObj = {
    example_blue: exampleBlue,
    example_blue_with_keyboard: exampleBlueWithKeyboard,
    example_green: exampleGreen,
    example_green_with_keyboard: exampleGreenWithKeyboard,
    example_red: exampleRed,
    example_red_with_keyboard: exampleRedWithKeyboard,
  };
  return (
    <img
      src={sourceImgObj[props.type]}
      alt={`Logo Size Image: ${props.type}`}
      style={{
        width: 240,
        display: "inline",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
