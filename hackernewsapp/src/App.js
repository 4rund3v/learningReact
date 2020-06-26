import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getNews } from "./services/news";

function isSearched(searchTerm) {
  return function (item) {
    return item.title
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { news: getNews(), searchTerm: "" };
  }
  handleDismiss = (newsId) => {
    const newsListUpdated = this.state.news.filter(
      (item) => item.id !== newsId
    );
    this.setState({ news: newsListUpdated });
  };

  handleSearch = (event) => {
    console.log("Search term is getting updated with : ", event.target.value);
    const searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm });
  };

  render() {
    const { searchTerm, news } = this.state;
    // const { handleDismiss, handleSearch } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => this.handleSearch(event)}
            placeholder="Search ..."
          />
        </form>
        {news.filter(isSearched(searchTerm)).map((item) => {
          return (
            <div key={item.id}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.points}</span>
              <span>{item.comments}</span>
              <span>
                <button onClick={() => this.handleDismiss(item.id)}>
                  Dismiss
                </button>
              </span>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default App;
