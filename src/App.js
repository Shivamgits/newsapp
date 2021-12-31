import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =() => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;



  // state={
  //   progress:0,
  //   color:"primary"
  // }

  const[progress,setProgress] = useState(0)
  const[color,setColor] = useState("primary")

  // setProgress =(progress) => {
  //   setState({progress:progress})
  // }
  // setColor =(color) => {
  //   setState({color:color})
  // }
  
  
    return (
      <>
      <Navbar key="general"  setColor={setColor} backgroundColor={color} />
     <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
   
    <div className="container">
    { <Routes>
       {<Route exact  path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" backgroundColor={color} />}/> }
       {<Route exact  path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" backgroundColor={color} />}/> }
       {<Route exact  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" backgroundColor={color} />}/> }
       {<Route exact  path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" backgroundColor={color} />}/> }
       {<Route exact  path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" backgroundColor={color} />}/> }
       {<Route exact  path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" backgroundColor={color} />}/> }
       {<Route exact  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" backgroundColor={color}/>}/> }
       {<Route exact  path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" backgroundColor={color} />}/> }
     </Routes> }
     </div>   
      </>
    )
  
}
export default App;
