import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state={
    progress:0,
    color:"primary"
  }

  setProgress =(progress) => {
    this.setState({progress:progress})
  }
  setColor =(color) => {
    this.setState({color:color})
  }
  
  render() {
    return (
      <>
      <Navbar key="general"  setcolor={this.setColor} backgroundColor={this.state.color} />
     <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />
   
    <div className="container">
    { <Routes>
       {<Route exact  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" backgroundColor={this.state.color} />}/> }
       {<Route exact  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" backgroundColor={this.state.color} />}/> }
       {<Route exact  path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" backgroundColor={this.state.color} />}/> }
       {<Route exact  path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" backgroundColor={this.state.color} />}/> }
       {<Route exact  path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" backgroundColor={this.state.color} />}/> }
       {<Route exact  path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" backgroundColor={this.state.color} />}/> }
       {<Route exact  path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" backgroundColor={this.state.color}/>}/> }
       {<Route exact  path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" backgroundColor={this.state.color} />}/> }
     </Routes> }
     </div>   
      </>
    )
  }
}
