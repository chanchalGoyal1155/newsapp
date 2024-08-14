import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "South Asian Heritage Month: From cricket to weightlifting, four athletes trailblazing in their sport",
        "description": "To mark South Asian Heritage Month, BBC Sport takes a look at four athletes, in Britain and across the world, who are trailblazers their sport.",
        "url": "http://www.bbc.co.uk/sport/articles/cvg44p2v4zvo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/dc86/live/0d98f940-58c7-11ef-b2d2-cdb23d5d7c5b.jpg",
        "publishedAt": "2024-08-13T08:37:14.4619713Z",
        "content": "Scotland's Abtaha Maqsood became the first British female cricket player to wear the hijab.\r\nBorn in Glasgow to Pakistani parents, the 25-year-old plays for Birmingham Phoenix, Sunrisers and Middlese… [+704 chars]"
      },
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "James Anderson: England great 'open' to continuing career in white ball cricket",
        "description": "James Anderson says he is \"still fit enough\" to continue his career as he considers a move into white ball cricket.",
        "url": "http://www.bbc.co.uk/sport/cricket/articles/cgrjnz8pgkvo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/27d8/live/96a5ec10-5940-11ef-94ec-63bde61d9499.jpg",
        "publishedAt": "2024-08-13T07:52:17.99265Z",
        "content": "\"I might be in a bit of denial because I'm well aware I won't play for England again, but I've still not made a decision on my actual cricket career,\" Anderson told the Press Association.\r\n\"There's d… [+729 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]
  
  constructor(){
    super();
    console.log("Hello I'm a constructor from news component")
    this.state={
      articles: this.articles,
      loading: false


    }
  }
  render() {
    return (
      <div className="container">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">

          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_sport/dc86/live/0d98f940-58c7-11ef-b2d2-cdb23d5d7c5b.jpg" newsUrl="TODO" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          
        </div>
      </div>
    );
  }
}

export default News;
