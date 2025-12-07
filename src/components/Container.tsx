import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",   // ✅ centers horizontally
        alignItems: "center",       // ✅ centers vertically
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Container;