import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "5",
    category: "sports",
    backgroundColor: "primary"
    
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    backgroundColor: PropTypes.string,
    apiKey: PropTypes.string
  };
   capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`  
  }
  //firstly constructor will run then render and at the last componentDidMount

  async UpdateNews() {
    this.props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(20);
    let parsedData = await data.json();
    this.props.setProgress(50);
    console.log(parsedData);
     this.setState({
       articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    await this.UpdateNews();
  }
 
  fetchMoreData = async () => {
   this.setState( {page: this.state.page + 1});
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({
       articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };




  render() {
    
    return (
      <>
     
        <h1 className="text-center">NewsMonkey-Top  {this.capitalizeFirstLetter(this.props.category)}  Headlines    </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
      <div className="container">
          <div className="row">
          {
            this.state.articles.map((element) => {
            
               return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={element.description ? element.description.slice(0, 90) : "" }
                      
                    imageUrl={ element.urlToImage ? element.urlToImage: " https://womansera.com/wp-content/uploads/2021/12/wp-1640595388943.png  "}
                     newsUrl={element.url}  author={element.author}  date={element.publishedAt}   source={element.source.name} backgroundColor ={this.props.backgroundColor} />
                </div>
              
            })}
           </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
    
  }
}

export default News;
