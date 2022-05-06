import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Videos from './components/Videos';
import MusicHub from './components/MusicHub';
import VideoHub from './components/VideoHub';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
           <Route path="/videos">
             <div className='videos'>
              <Videos />
             </div>
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
     
    </div>
    </Router>
  );
}


export default App;
