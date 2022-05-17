import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Videos from './components/Videos';
import MusicHub from './components/MusicHub';
import VideoHub from './components/VideoHub';
import Sidebar from './components/Sidebar';
import Music from './components/Music';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <div className="app">
      <Navbar setOpen={ setOpen } open={open}/>
      <Switch>
           <Route path="/videos">
             <div className='videos'>
              <Videos />
             </div>
          </Route>
          <Route path='/music'>
              <Music />
          </Route>

          <Route path="/">
          <Header />
          <MusicHub />
          <VideoHub />
          <div id='about'>
            <About />
          </div>
          <section id="footer">
               <Footer />
          </section>
          </Route>
          
      </Switch>
      <Sidebar open={ open }/>
    </div>
    </Router>
  );
}


export default App;
