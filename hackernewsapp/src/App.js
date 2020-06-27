import React, { Component } from "react";
import "./App.css";
import { getNews } from "./services/news";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "/query=";

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
    this.state = { news: getNews(), searchTerm: DEFAULT_QUERY, result: null };
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

  setSearchTopStories = (result) => {
    this.setState({ result });
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    const searchUrl = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`;
    fetch(searchUrl)
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => error);
  }

  render() {
    const { searchTerm, news } = this.state;
    // const { handleDismiss, handleSearch } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search searchTerm={searchTerm} onSearchChange={this.handleSearch} />
        </div>

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
    <div className="table">
      {news.filter(isSearched(searchTerm)).map((item) => {
        return (
          <div className="table-row" key={item.id}>
            <span style={{ width: "40%" }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: "40%" }}>{item.points}</span>
            <span style={{ width: "10%" }}>{item.comments}</span>
            <span style={{ width: "10%" }}>
              <Button
                onClick={() => onDismiss(item.id)}
                className="button-inline"
              >
                {" Dismiss "}
              </Button>
            </span>
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
