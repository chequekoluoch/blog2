import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './containers/Home'
import ContactUs from './containers/ContactUs'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Post from './containers/Post';
function App() {
  return (
    <Router>
    <div className="App">
         <Header />
         <Hero />
         
     <Route path="/" exact component={Home}/>
     <Route path="/contact-us" component={ContactUs}/>
      <Route path="/post/:postId" component={Post} />
  </div>
    </Router>
  );
}

export default App;
