//Componente com React: Um import, uma função e um retorno HTML. O export para pode utilizar em outro arquivo. 
import React from 'react';
import {HeaderReactLab, Wrapper} from './components/HeaderReactLab'; 
import LogoReactLab from './components/LogoReactLab';
import ButtomReactLab from './components/ButtomReactLab';
import FooterReactLab from './components/FooterReactLab';
import LogoImersao from './components/LogoImersao';
import {BannerReactLab, Text} from './components/BannerReactLab';
import TagReactLab from './components/TagReactLab';
import TitleReactLab from './components/TitleReactLab';
import DescriptionReactLab from './components/DescriptionReactLab';
import ThumbReactLab from './components/ThumbReactLab';
import thumb from './assets/imagens/thumb-react-lab.jpg';


//JSX - [J]ava[S]cript [X]ML abaixo - Escrevendo HTML dentro do JavaScript ;) 
function App() {
  return (
    <>
      <HeaderReactLab>
        <Wrapper>
          <LogoReactLab />      

          <ButtomReactLab>Novo Vídeo</ButtomReactLab>
        </Wrapper>
      </HeaderReactLab>

      <BannerReactLab>
        <Text>
          <TagReactLab>Games</TagReactLab>
          <TitleReactLab>Os melhores games do mundo</TitleReactLab>
          <DescriptionReactLab>
            Este é mais um vídeo do jogos da galera. Desta vez, uma tentativa de ter a minha primeira vitória em duplas no Fortnite. Eu conto com a ajuda do Flakes, do canal Flakes Power.

            Jogo: Fortnite
            Sistemas: PC, PS4, iOS, Xbox One, Switch, iOs e Android
          </DescriptionReactLab>
        </Text>
        < ThumbReactLab src={thumb} alt = "Thumb no Vídeo: Os melhores games do mundo." />
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
