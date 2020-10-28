import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -moz-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  border: 2px solid black;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin-top: 5rem;
  padding: 1rem 3rem;
`;

const App = () => {
  // Obtener frase al cargar la página
  useEffect(() => {
    consultarApi();
  }, []);

  // Crear state para la frase
  const [frase, setFrase] = useState('');
  
  // Consultar API
  const consultarApi = async () => {
    const consultarApi = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const datos = await consultarApi.json();
    setFrase(datos[0]);
  }

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton
        onClick={consultarApi}
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;