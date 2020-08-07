//Componente com React: Um import, uma função e um retorno HTML. O export para pode utilizar em outro arquivo. 
import React from 'react';
import LogoReactLab from './components/LogoReactLab';
import HeaderReactLab from './components/HeaderReactLab';
import ButtomReactLab from './components/ButtomReactLab';
import FooterReactLab from './components/FooterReactLab';
import LogoImersao from './components/LogoImersao';
import BannerReactLab from './components/BannerReactLab';
import TagReactLab from './components/TagReactLab';


//JSX - [J]ava[S]cript [X]ML abaixo - Escrevendo HTML dentro do JavaScript ;) 
function App() {
  return (
    <>
      <HeaderReactLab>
        <LogoReactLab />      
        <ButtomReactLab>Novo Vídeo</ButtomReactLab>
      </HeaderReactLab>

      <BannerReactLab>

        <TagReactLab>FrontEnd</TagReactLab>
      </BannerReactLab>

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
