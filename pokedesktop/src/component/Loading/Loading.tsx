import React from "react";
import { Spin } from "antd";
const Loading: React.FC<{}> = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
