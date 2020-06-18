import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    items: ["PS5", "XBoxOneX", "SteamBox", "Stadia"],
  };

  //   constructor() {
  //     super();
  //     console.log("this", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    const h1 = (
      <span style={this.styles} className={this.getBadgeClasses()}>
        {this.formatCount()}
      </span>
    );
    const b1 = (
      <button
        onClick={this.handleIncrement}
        style={{ fontSize: 10 }}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
    );

    const img1 = <img src={this.state.imageUrl} alt="" />;
    const mainContent = this.renderItems();
    const main = (
      <React.Fragment>
        {img1}
        <br />
        {h1}
        {b1}
        {mainContent}
      </React.Fragment>
    );
    return main;
  }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
    return;
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let badgeClasses = "badge m-2 badge-";
    badgeClasses += this.state.count === 0 ? "warning" : "primary";
    return badgeClasses;
  }
  renderItems() {
    if (this.state.items.length === 0) {
      return <h1>No Items to display</h1>;
    } else {
      return (
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Counter;
