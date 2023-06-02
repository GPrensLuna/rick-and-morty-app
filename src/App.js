import './App.css';
import {useState} from 'react';
import Cards from './components/cards/Cards';
import characters from './data.js';
import Nav from './components/nav/Nav';

function App() {
   const [characters, setCharacters] = useState([])

   const example = { 
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };


   function onSearch(){
      setCharacters([...characters, example])
   }

   return (
      <div className='App' style={{padding: '25px'}}>
         
            <Nav onSearch={onSearch}/>

         <div className='card'>

            <Cards characters={characters} />

         </div>

      </div>
 );
   }

export default App;
