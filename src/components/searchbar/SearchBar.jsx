import React, { useState } from 'react';
import { DivSearch, InputSearch, ButtonSearch } from './searchbarStyle';

export default function SearchBar({onSearch}) {

const[id, setId]=useState('')

function handleChange(event){ 
   setId(event.target.value)
}

   return (
      <DivSearch>
         <ButtonSearch onClick={()=> onSearch(id)}>Agregar</ButtonSearch> 
         <InputSearch type='search' onChange={handleChange} />
      </DivSearch>
   );
};



