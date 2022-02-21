import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FavouriteMovies } from './components/Favourites';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/favourites" element={<FavouriteMovies/>}/>
      </Routes>
      
      </Router>
     
      
     
    
    </div>
  );
}

export default App;
