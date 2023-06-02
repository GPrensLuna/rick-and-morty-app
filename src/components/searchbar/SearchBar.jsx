import {DivSearch, InputSearch} from './searchbarStyle'
export default function SearchBar({onSearch}) {
   return (
      <DivSearch>
          <InputSearch type='search' />
         <button onClick={onSearch}>Agregar</button> 
      </DivSearch>
   );
}
