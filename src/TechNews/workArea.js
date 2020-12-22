import React, { Component } from "react";
import NavBarComponent from "./navBar";
import CardComponet from "./cardComponent";
import Header from "./headerComponent";

class WorkArea extends Component {
  state = {
    items: [],
    category: "technology",
  };

  constructor() {
    super();
  }

  getLogoDisplay() {
    if (window.innerWidth < 450) {
      return "";
    } else return "none";
  }

  handleonCatClick = (category) => {
    this.handleCatChange(category);
  };

  async handleCatChange(category) {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    this.setState({ category: category });
    await this.sleep(120);
    this.fetchData();
    await this.sleep(20);

    this.render();
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  componentDidMount() {
    this.fetchData();
    this.setState({ windowWidth: window.innerWidth });
  }

  getCardWidth() {
    if (this.state.windowWidth > 450) return "400px";
    else {
      return "100%";
    }
  }

  fetchData = () => {
    fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/" +
        this.state.category +
        "/in.json"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          items: data["articles"],
        });
      })
      .catch((reject) => console.log("offlinne"));
  };

  render() {
    return (
      <div>
        <Header />
        <NavBarComponent
          onCatClick={this.handleonCatClick}
          categoryprop={this.state.category}
        />
        {/* <Loading /> */}

        <div style={{ width: this.getCardWidth() }}>
          {this.state.items.map((item) => (
            <CardComponet
              item={item}
              key={this.state.items.indexOf(item)}
            ></CardComponet>
          ))}
        </div>
      </div>
    );
  }
}

export default WorkArea;
