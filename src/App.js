import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Track from './components/Track';
import About from './components/About';
import Footer from './components/Footer';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    
    <div className='tracklist'>
   
        <h2>My Tracklist</h2>

        <div className="tracklist__container" id="music">
          <Track track="https://open.spotify.com/embed/track/4yNumtdtwcNxBpgx4zxzKJ?utm_source=generator" />
          <Track track="https://open.spotify.com/embed/track/6tL73K9QlfyC2X8yV2KrAw?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/2yBETN6ZKKJnDDsMzVyOmT?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
          <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
        </div>
      </div>
      <div className="video__container" id='videos'>
        <h2>Videos</h2>

        <div className='videos'>
        <Video videoLink="https://www.youtube.com/embed/NLjx100fwWM"  className="video"/>
        <Video videoLink="https://www.youtube.com/embed/rB7Geg6hhQc" className="video"/>
        </div>
          <a href='#'>See More <span>></span></a>
      </div>
      <div id='about'>
         <About />
      </div>
      <br></br>

      <section id="footer">
        <Footer />
    </section>
    </div>
  );
}


export default App;
