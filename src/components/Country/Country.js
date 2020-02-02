import React, { PureComponent } from "react";
import { API_KEY } from "../../apiKey";
import { countryName } from "./utils";

class Country extends PureComponent {
  state = {
    articles: []
  };

  async componentDidMount() {
    const { country } = this.props.match.params;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&apiKey=${API_KEY}`
    );
    const { articles } = await response.json();
    this.setState({ articles });
  }

  render() {
    console.log(this.props);
    const name = countryName(this.props.match.params);
    return (
      <div>
        <h2>Top news from {name}</h2>
      </div>
    );
  }
}

export default Country;
