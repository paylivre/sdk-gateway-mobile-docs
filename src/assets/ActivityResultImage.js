import React from "react";

import activityResultImage from "../../static/extras/activityResultImage.png";

export default function ActivityResultImage() {
  return (
    <img
      src={activityResultImage}
      alt="activity Result Image - Example"
      style={{
        width: 320,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
