import React from "react";
import "./image.css";
const Image = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <img
        className="image_blur thumb"
        src={process.env.PUBLIC_URL + "/images/blur_placeholder.jpg"}
        style={{ display: isLoaded ? "none" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        src={props.src}
      />
    </React.Fragment>
  );
};
export default Image;
