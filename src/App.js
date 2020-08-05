//Componente com React: Um import, uma função e um retorno HTML. O export para pode utilizar em outro arquivo. 
import React from 'react';
import LogoReactLab from './components/LogoReactLab';
import HeaderReactLab from './components/HeaderReactLab';
import ButtomReactLab from './components/ButtomReactLab';
import FooterReactLab from './components/FooterReactLab';
import LinkReactLab from './components/LinkReactLab';
import HighlightReactLab from './components/HighlightReactLab';
import LogoImersao from './components/LogoImersao';


//JSX - [J]ava[S]cript [X]ML abaixo - Escrevendo HTML dentro do JavaScript ;) 
function App() {
  return (
    <>
      <HeaderReactLab>
        <LogoReactLab />      
        <ButtomReactLab>Novo Vídeo</ButtomReactLab>
      </HeaderReactLab>
    
      <FooterReactLab>
        <LogoReactLab />
        <p>
          Site feito na <a href="https://alura.com.br"><LogoImersao /></a> 
        </p>
      </FooterReactLab>
  </>
  );
}

export default App;
