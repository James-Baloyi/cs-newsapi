import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import React from 'react';
import Hero from './components/hero/Hero.js';
import Article from './components/article/Article.js';

var key = "780e3fb4c4664d07b09bb5ed5f3c9a85";

var triggered = false;

var loadedArticles;

export default class App extends React.Component {

  constructor(){
    super();
      this.state = {
        headerArticle: {},
        hero: <p>fetching hero...</p>,
        articles: <p>fetching articles...</p>,
        articlesArray: []
      }
  }

  getAndDisplayArticles(){
    var url = 'https://newsapi.org/v2/everything?' +'q=Apple&' +'from=2021-04-12&' +'sortBy=popularity&' +'apiKey='+key;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
      if(xhr.status == "200"){
        var response = JSON.parse(xhr.response);
        var headerArticle = response.articles[0];
        this.setState({headerArticle: headerArticle}, ()=>{console.log(this.state.headerArticle)})
        this.setState({hero: <Hero data={headerArticle}/>});
        response.articles.shift();
        var articles = response.articles;
        this.setState({articlesArray:articles});
      }
    }
    xhr.send();
  }

  componentDidMount(){
    this.getAndDisplayArticles();
  }

  render(){
  var articlesArray = this.state.articlesArray;
  loadedArticles = articlesArray.map(article => {
      return (
        <div className="article">
          <center>
        <img src={article.urlToImage}/>
        <br/>
        <small>{article.source.name}</small>
        
        <br/>
        <h3>{article.title}</h3>
        <small>{article.publishedAt.split("T")[0]}</small><br/><br/>
        <a href={article.url} target="blank"><button className="search-button link">Read More</button></a>
        </center>
    </div>
      );
  });

  return (
  <div className="app">
    <div className="header-parent">
    <Header onQuerySubmit={()=>{this.getAndDisplayArticles()}}/>
    </div>
      <div className="column left">
        {this.state.hero}
        <hr noshade className="ruler"/><br/>
        {loadedArticles}
      </div>

      <div className="column right">
        <h2>Column 2</h2>
      </div>
  </div> 
  );
}
}

