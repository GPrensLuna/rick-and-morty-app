import './App.css';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App' style={{padding: '25px'}}>
         
         <div className='navbar'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />     
         </div>
         
         <div className='card'>

         <Cards characters={characters} />

         </div>

      </div>
 );
   }

export default App;
