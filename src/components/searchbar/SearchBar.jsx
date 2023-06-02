import React from 'react';
import { DivSearch, InputSearch, ButtonSearch } from './searchbarStyle';

export default function SearchBar({onSearch}) {
   return (
      <DivSearch>
          <InputSearch type='search' />
         <ButtonSearch onClick={onSearch}>Agregar</ButtonSearch> 
      </DivSearch>
   );
};
