import React, { Component } from "react";
import "./App.css";
import { getNews } from "./services/news";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

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
    this.state = { searchTerm: DEFAULT_QUERY, result: null };
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    const searchUrl = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`;
    console.log("componentDidMount : the search url is ", searchUrl);
    fetch(searchUrl)
      .then((response) => {
        console.log("ComponentDidMount : ", response);
        return response.json();
      })
      .then((result) => {
        console.log("Result from fetch : ", result);
        this.setSearchTopStories(result);
      })
      .catch((error) => error);
  }

  handleDismiss = (newsId) => {
    console.log("handleDismiss: Dismiss id", newsId);
    const newsListUpdated = this.state.result.hits.filter(
      (item) => item.objectID !== newsId
    );
    console.log("Number of items in newsListUpdated:", newsListUpdated.length);
    this.setState({ result: { ...this.state.result, hits: newsListUpdated } });
  };

  handleSearch = (event) => {
    console.log("Search term is getting updated with : ", event.target.value);
    const searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm });
  };

  setSearchTopStories = (result) => {
    this.setState({ result });
  };

  onSearchSubmit = () => {
    const { searchTerm } = this.state;
  };

  render() {
    const { searchTerm, result } = this.state;
    // const { handleDismiss, handleSearch } = this.state;
    if (!result) {
      return <div>{"No data found."}</div>;
    } else {
      console.log("data to be rendered is : ", result);
      return (
        <div className="page">
          <div className="interactions">
            <Search
              searchTerm={searchTerm}
              onSearchChange={this.handleSearch}
            />
          </div>

          <Table
            news={result.hits}
            searchTerm={searchTerm}
            onDismiss={this.handleDismiss}
          />
        </div>
      );
    }
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
          <div className="table-row" key={item.objectID}>
            <span style={{ width: "60%" }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: "10%" }}>{item.author}</span>
            <span style={{ width: "5%" }}>{item.points}</span>
            <span style={{ width: "5%" }}>{item.num_comments}</span>
            <span style={{ width: "10%" }}>
              <Button
                onClick={() => onDismiss(item.objectID)}
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
