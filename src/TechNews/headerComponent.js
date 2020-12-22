import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,20,150,0.5)",

        color: "black",
      }}
    >
      <h1 style={{ margin: 0, padding: "10px" }}>
        <i
          style={{
            textShadow: "1px 1px purple",
            fontFamily: "fantasy",
            color: "white",
          }}
        >
          News
        </i>
        <i style={{ fontFamily: "cursive", textShadow: "1px 1px 2px white" }}>
          _Feed
        </i>
      </h1>
    </div>
  );
};

export default Header;
