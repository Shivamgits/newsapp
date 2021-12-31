import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const [articles,setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
   
 
   const capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
   
  //firstly constructor will run then render and at the last componentDidMount

  const UpdateNews=  async () => {
    props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(20);
    let parsedData = await data.json();
    props.setProgress(50);
    
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
     UpdateNews();
     // eslint-disable-next-line
     //for removing warning of missing dependency
   
  }, [])
 
  const fetchMoreData = async () => {
   
   
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
   
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

  };
    return (
      <>
     
        <h1 className="text-center" style={{margin: '35px 0px' , marginTop: '90px'}}>NewsMonkey-Top  {capitalizeFirstLetter(props.category)}  Headlines    </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
      <div className="container">
          <div className="row">
          {
            articles.map((element) => {
            
               return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={element.description ? element.description.slice(0, 90) : "" }
                      
                    imageUrl={ element.urlToImage ? element.urlToImage: " https://womansera.com/wp-content/uploads/2021/12/wp-1640595388943.png  "}
                     newsUrl={element.url}  author={element.author}  date={element.publishedAt}   source={element.source.name} backgroundColor ={props.backgroundColor} />
                </div>
              
            })}
           </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
    
  
}
News.defaultProps = {
  country: "in",
  pageSize: "5",
  category: "sports",
  backgroundColor: "primary"
  
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  backgroundColor: PropTypes.string,
  apiKey: PropTypes.string
};

export default News;
