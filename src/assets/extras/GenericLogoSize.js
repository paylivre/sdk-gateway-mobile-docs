import React from "react";

import correctLogoSize from "../../../static/extras/logo-image/correct-logo-size.png";
import incorrectLogoSize26_26 from "../../../static/extras/logo-image/incorrect-logo-size-26-26.png";
import incorrectLogoSize52_26 from "../../../static/extras/logo-image/incorrect-logo-size-52-26.png";
import incorrectLogoSize75_26 from "../../../static/extras/logo-image/incorrect-logo-size-75-26.png";
import incorrectLogoSize170_26 from "../../../static/extras/logo-image/incorrect-logo-size-170-26.png";

export default function GenericLogoSize(props) {
  // object literal to help switching between types of logo images based on the passed prop
  const sourceImgObj = {
    correct_logo: correctLogoSize,
    incorrect_logo_26_26: incorrectLogoSize26_26,
    incorrect_logo_52_26: incorrectLogoSize52_26,
    incorrect_logo_75_26: incorrectLogoSize75_26,
    incorrect_logo_170_26: incorrectLogoSize170_26,
  };
  return (
    <img
      src={sourceImgObj[props.type]}
      alt={`Logo Size Image: ${props.type}`}
      style={{
        width: 540,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
