import React,{useState} from 'react';
import {tab} from "../src/data"
import ListMovies from './ListMovies';
import AddMovie from './AddMovie';
function App() {
   const [tabmovie, setTabmovie] = useState(tab)
const deleteMovie = id => {
  setTabmovie(tabmovie.filter((el,i)=> i !== id))
}

const addMovie =(newMovie)=>{
  setTabmovie([...tabmovie,newMovie])
  console.log("newMovie",newMovie)
}

const addMovieUpdate=(newMovie,id)=>{
  setTabmovie(tabmovie.map((el,i)=>(i===id?{...newMovie}:el)))
  console.log("newMovie",newMovie)
}
console.log("tabMovie",tabmovie)
  return (
    <div>
    <ListMovies listmovies={tabmovie} deleteMovie={deleteMovie} addMovieUpdate={addMovieUpdate}/>
    <AddMovie addMovie={addMovie}/>
    </div>
  );
}

export default App;
