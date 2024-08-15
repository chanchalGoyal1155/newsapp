import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I'm a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-14&to=2024-08-14&sortBy=popularity&apiKey=6e8807a21cd04a52bb7f3c6fdfa0eb34&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true }); // Start loading before fetch
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles || [], // Ensure articles is an array
      totalResults: parseData.totalResults,
      loading: false // Stop loading after fetch
    });
  }

  handlePreviousClick = async () => {
    console.log('prev');

    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-14&to=2024-08-14&sortBy=popularity&apiKey=6e8807a21cd04a52bb7f3c6fdfa0eb34&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles || [],
      loading: false
    });
  }

  handleNextClick = async () => {
    console.log('nxt');
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
      // Do nothing if next page exceeds total pages
    } else {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-14&to=2024-08-14&sortBy=popularity&apiKey=6e8807a21cd04a52bb7f3c6fdfa0eb34&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles || [],
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        
        <div className="row">
          {this.state.loading && <p>Loading...</p>} {/* Display loading message */}
          {this.state.articles && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem 
                    title={element.title ? element.title : ""} 
                    description={element.description ? element.description : ""} 
                    imageUrl={element.urlToImage} 
                    newsUrl={element.url} 
                  />
                </div>
              );
            })
          ) : (
            !this.state.loading && <p>No news available.</p> // Display if no articles and not loading
          )}
        </div>
        <div className="container d-flex justify-content-between mb-2">
          <button 
            disabled={this.state.page <= 1} 
            type="button" 
            className="btn btn-dark" 
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button 
            disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))}
            type="button" 
            className="btn btn-dark" 
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
