import React from "react";

import quickImplementationImage from "../../static/android/quick-implementation-result.png";

export default function QuickImplementationImage(props) {
  return (
    <img
      src={quickImplementationImage}
      alt="Quick Implementation Result Image"
      style={{
        width: 320,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
