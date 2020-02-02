import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import { API_KEY } from "../../apiKey";
import { articles } from '../Article/articles';
import { countryName } from "./utils";
import Article from "../Article/Article";
import style from './Country.module.scss'

class Country extends PureComponent {
  state = {
    articles: []
  };

  async componentDidMount() {
    // const { country } = this.props.match.params;
    // const response = await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&apiKey=${API_KEY}`
    // );
    // const { articles } = await response.json();
    // this.setState({ articles });
  }

  render() {
    const name = countryName(this.props.match.params);
    // const {articles} = this.state
    return (
      <div>
        <div className={style.stickyTitle}>
        <Link to="/">&lt; Back</Link>
        <h2>Top news from {name}</h2>
        </div>
        <div className={style.articleList} >
          {articles && articles.length ? articles.map(article => <Article article={article} />) : null}
        </div>
      </div>
    );
  }
}

export default Country;
