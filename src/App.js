//Componente com React: Um import, uma função e um retorno HTML. O export para pode utilizar em outro arquivo. 
import React from 'react';
import LogoReactLab from './components/LogoReactLab';
import HeaderReactLab from './components/HeaderReactLab';



//JSX - [J]ava[S]cript [X]ML abaixo - Escrevendo HTML dentro do JavaScript ;) 
function App() {
  return (
    <HeaderReactLab>
      <LogoReactLab />      
      
    </HeaderReactLab>
  );
}

export default App;
