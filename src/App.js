import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Track from './components/Track';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
    <section id="home">
      <Header />
    </section>
    <section id="music">
    <div className='tracklist'>
   
   <h2>My Tracklist</h2>

   <div className="tracklist__container ">
     <Track track="https://open.spotify.com/embed/track/4yNumtdtwcNxBpgx4zxzKJ?utm_source=generator" />
     <Track track="https://open.spotify.com/embed/track/6tL73K9QlfyC2X8yV2KrAw?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/2yBETN6ZKKJnDDsMzVyOmT?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
     <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
   </div>
 </div>
    </section>
    <section id="footer">
        <Footer />
    </section>
    </div>
  );
}


export default App;
