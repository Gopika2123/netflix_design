import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <Banner      
      fetchurl={requests.fetchNetflixOriginals}
      />
      <Row
      isLargeRow={true}
      title="NetflixOriginals"
      fetchurl={requests.fetchNetflixOriginals}
      />

     <Row
      title="Trending"
      fetchurl={requests.fetchTrending}
      />

      <Row
      title="TopRated"
      fetchurl={requests.fetchTopRated}
      />
       <Row
      title="ActionMovies"
      fetchurl={requests.fetchActionMovies}
      />
       <Row
      title="ComedyMovies"
      fetchurl={requests.fetchComedyMovies}
      />
       <Row
      title="HorrorMovies"
      fetchurl={requests.fetchHorrorMovies}
      />
       <Row
      title="RomanceMovies"
      fetchurl={requests.fetchRomanceMovies}
      />
       <Row
      title="Documentaries"
      fetchurl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
