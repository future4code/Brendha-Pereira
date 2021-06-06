import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './img/avatar-img.png'
import Logo from './img/logo-cubos.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil}
          nome="Brendha" 
          descricao="Oi, eu sou a Brendha, tenho 19 anos. Sou aluna da Labenu, estudo Front-end e React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-email'>
          <h3>E-mail: barbosabrendha@gmail.com </h3>
          {/* <CardPequeno 
          email=""
          /> */}
      </div>
      <div className='page-section-endereço' > 
        <h3>Endereço: Rua Gostosas</h3>
        {/* <CardPequeno
        Rua=""
        /> */}

      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudo atualmente na Labenu e desenvolvo sites" 
        />
        
        <CardGrande 
          imagem={Logo}
          nome="Cubos Academy" 
          descricao="Participei de uma imersão à programação e fiz o meu primeiro site." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
