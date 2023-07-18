import React from "react";
import { Title } from "./Components/Title/Title";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heads: 0,
      tails: 0,
      img_url: null,
      count: 0,
    };
    this.ShowCoin = this.ShowCoin.bind(this);
  }
  ShowCoin() {
    const randomNumber = Math.floor(Math.random() * 2);
    const imageUrls = [
      "https://tinyurl.com/react-coin-heads-jpg",
      "https://www.pcgs.com/UserImages/1795%20eagle%20rev.jpg",
    ];
    const randomImgUrl = imageUrls[randomNumber];
    console.log(randomImgUrl);

    if (randomNumber == 0) {
      this.setState({
        count: this.state.count + 1,
        img_url: randomImgUrl,
        heads: this.state.heads + 1,
        tails: this.state.tails,
      });
    } else if (randomNumber == 1) {
      this.setState({
        count: this.state.count + 1,
        img_url: randomImgUrl,
        heads: this.state.heads,
        tails: this.state.tails + 1,
      });
    }
  }
  render() {
    console.log(this.state);
    const { count, img_url, heads, tails } = this.state;
    console.log(count);
    return (
      <div className="d-flex flex-column align-items-center">
        <Title />
        {img_url && <img src={img_url} style={{ width: "150px" }} />}
        <br />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.ShowCoin}
        >
          FLIP MEEEE
        </button>{" "}
        <br />
        <p
          style={{
            color: "#000",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
          }}
        >
          Out of {count} flips, there have been {heads} heads and {tails} tails
        </p>
      </div>
    );
  }
}

export default App;
