import React from "react";

import sdkDemoIllustration from "../../static/sdk-demo-illustration.gif";

export default function DemoIllustrationGif(props) {
  return (
    <img
      src={sdkDemoIllustration}
      alt="Checkout by parameters Result Image"
      style={{
        width: 400,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
