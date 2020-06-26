import React, { Component } from "react";
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
        <Search searchTerm={searchTerm} onSearchChange={this.handleSearch} />
        <Table
          news={news}
          searchTerm={searchTerm}
          onDismiss={this.handleDismiss}
        />
      </div>
    );
  }
}

function Search(props) {
  const { searchTerm, onSearchChange } = props;
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event)}
        placeholder="Search ..."
      />
    </form>
  );
}

function Table(props) {
  const { news, searchTerm, onDismiss } = props;
  return (
    <div>
      {news.filter(isSearched(searchTerm)).map((item) => {
        return (
          <div key={item.id}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.points}</span>
            <span>{item.comments}</span>
            <Button
              onClick={() => onDismiss(item.id)}
              className="dismissButton"
            >
              {" Dismiss "}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

function Button(props) {
  const { onClick, className = "", children } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default App;
