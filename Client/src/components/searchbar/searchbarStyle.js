import styled from 'styled-components';

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative; /* Añadimos posición relativa al contenedor */
`;

export const InputSearch = styled.input`
  padding: 10px;
  border: 1px solid #05f2af;
  background-color:#B65CF2;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  
  &:focus {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  padding: 10px;
  border: #9308A6;
  background-color: #F25C84;
  color: #B65CF2;
  border-radius: 18px;
  font-size: 30px;
  cursor: pointer;
`;

export const SearchBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.7), transparent); /* Aplicamos un degradado vertical */
  pointer-events: none; /* Evitamos que el fondo reciba eventos de puntero */
`;

