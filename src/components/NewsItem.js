import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://www.livelaw.in/h-upload/2024/08/14/750x450_555482-750x450552648-9-judge-bench-new.webp":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a rel= "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              News More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
