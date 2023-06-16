import { useState } from 'react';
import { DivSearch, InputSearch, ButtonSearch } from './searchbarStyle';

export default function SearchBar({onSearch}) {

const[id, setId]=useState('')

function handleChange(event){ 
   setId(event.target.value)
}

   return (
      <DivSearch>
         <InputSearch type='search' onChange={handleChange} />
         <ButtonSearch onClick={()=> onSearch(id)}>Agregar</ButtonSearch> 
      </DivSearch>
   );
};



