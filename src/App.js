import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App' style={{padding: '25px'}}>
         <div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <hr />
         <Cards characters={characters} />
         <hr />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
             origin={Rick.origin.name}
            image={Rick.image} 
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         </div>
         </div>


 
 );
   }

export default App;
