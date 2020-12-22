import React from "react";
import { Card } from "react-bootstrap";
import useIntersectionObserver from "./observer.js";
import Image from "./image";

const CardComponet = (props) => {
  const { item } = props;
  const ref = React.useRef();

  const [isVisible, setIsVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <React.Fragment>
      <Card
        // bg="danger"
        style={{
          backgroundColor: "rgba(2,4,43,0.4)",
          width: "100%",
          borderColor: "rgba(2,2,2,0.4)",
          borderWidth: "2px",
          top: "10px",
          color: "black",
          marginTop: "30px",
          overflow: "hidden",
          // paddingTop: "10px",
          // borderRadius: "5px",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <Card.Body
          className="cardBody"
          style={{
            padding: 0,
            paddingTop: "0px",
            backgroundColor: "rgba(255,255,255,0.94)",
          }}
        >
          <div ref={ref}>
            {isVisible && (
              <Image
                src={item["urlToImage"]}
                style={{
                  borderRadius: "0px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottom: "1px solid grey",
                  maxHeight: "300px",
                  minHeight: "0px",
                  position: "relative",
                  display: "inline",
                  overflow: "hidden",
                }}
              ></Image>
            )}
          </div>
          <Card.Title
            style={{
              paddingTop: "25px",
              margin: 0,
              paddingBottom: "20px",
              textDecoration: "none",
              backgroundColor: "rgba(255,255,255,0.4)",
              fontFamily: "sans-serif",
            }}
          >
            {item["title"]}
          </Card.Title>
          <Card.Text
            style={{
              color: "black",
              textAlign: "left",
              textDecoration: "none",
              paddingBottom: "30px",
              overflowWrap: "break-word",
              paddingRight: "0px",
              paddingLeft: "5px",
              marginBottom: "0px",
              fontSize: "1em",
            }}
          >
            {item["description"]}
            <br />
            <br />
            {item["content"] == null
              ? " "
              : item["content"].substring(0, item["content"].indexOf("[+"))}
          </Card.Text>
          <Card.Footer
            style={{
              color: "red",
              textAlign: "right",
              // height: "20px",
              padding: "5px",

              paddingRight: "10px",
            }}
          >
            <a
              href={item["url"]}
              target="_blank"
              style={{ textDecoration: "none", color: "red" }}
            >
              Read
            </a>
          </Card.Footer>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardComponet;
