import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../img/spotify.png'
import LabefyLogo from '../img/labefy-logo.png'
import LogoIg from '../img/logo-ig.png'
import LogoLinkedin from '../img/linkedin-logo.jpg'
import LogoGithub from '../img/github-logo.jpg'

const Header = styled.header`
background-color: #45525B;
color:white;
display: flex;
justify-content: space-between;
align-items: center;
height: 15vh;

`
const LogoLabefy = styled.img`
height:12vh;
margin-left: 45%;
`
const ContainerLogo = styled.div`
display: flex;
align-items: center;

`
const ContainerFuncoes = styled.div`
display: flex;
margin-right: 50px;

`
const Funcoes = styled.p`
color: black;
cursor: pointer;
margin-right: 30px;

:hover{
    color:#FE7E02;
}
`
const VerPlaylists = styled.p`
color: black;
cursor: pointer;
margin-right: 20px;
border-right:solid 2px black ;
padding-right: 6px;

:hover{
    color:#FE7E02;
}
`
const Labefy = styled.h3`
color: #FE7E02;
font-size: 24px;
`
const CardCriarPlaylist = styled.div`

display: flex;
height: 100vh;
align-items: center;
justify-content: center;

`
const ContainerInfo = styled.div`
padding-top: 30px;
text-align: center;
height: 70vh;
width: 35vw;
background-image: radial-gradient( circle 932px at 30.5% 52.9%,  rgba(69,82,91,1) 0%, rgba(187,187,187,1) 100.2%, rgba(187,187,187,1) 100.2% );
border-radius: 20%;
box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);;
`
const ContainerBotoes = styled.div`

margin-top: 50px;

`
const BotaoCriar = styled.button`
border: none;
margin-left: 35%;
display: flex;
color: #EBE0D6;
background-color: #45525B;
height: 10vh;
width: 10vw;
align-items: center;
border-radius: 58px; 
justify-content: center;
:hover{
    transform: scale(1.1);
    color:#FE7E02;
}


`
const BotaoVer = styled.button`
border: none;
margin-left: 35%;
display: flex;
color: #EBE0D6;
background-color: #45525B;
height: 10vh;
width: 10vw;
align-items: center;
border-radius: 58px; 
justify-content: center;
margin-top: 20px;
:hover{
    transform: scale(1.1);
    color:#FE7E02 ;
}
`
const Input = styled.input`
border: none;
outline: 0;
:hover{
    background-color:#45525b9b ;
}
margin-top: 70px;
height: 8vh;
text-align: center;
width: 18vw;
border-radius: 30px;
background-color:#45525B ;
`
const ContainerFooter = styled.footer`
background-color: #45525B;
height:30vh;
margin-top: 10%;
color:white;
display: flex;
`
const LogoFooter = styled.img`
height:10vh;
margin-left: 4%;
margin-top: 2%;
`
const ContainerEmpresa = styled.div`
flex-direction: column;

margin-top: 2%;
margin-left: 5%;
margin-right: 10%;
`
const FuncoesFooter = styled.div`
margin-top: 15px;
cursor: pointer;

:hover{
    color:#FE7E02;
}
`
const Redes = styled.img`
height: 8vh;
margin-left: 15px;
:hover{
    transform: scale(1.1);
}
border-radius: 25%;
`
const DesenvolvidoFooter = styled.p`
padding-top:15px;
background-color:  #45525B;
display: flex;
justify-content: center;

`
const FraseFinal = styled.p`
opacity: 0.5;
`

export default class TelaCadastro extends React.Component {
  state={
      nome: ''
  }
  pegarNome = (e) =>{
    this.setState({nome: e.target.value})
  }

  fazerCadastro = () =>{
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body ={
      name: this.state.nome
      
    }
    axios.post(url, body,{
        headers:{
            Authorization: 'brendha-munoz'
        }
    }).then((res)=>{
      alert('Playlist criada!')
      this.setState({nome: ''})
    })
    .catch((err)=>{
      alert('Opa! algo de errado não está certo')
    })
    console.log(this.state)
}
render (){
    return (
      <div >
           <Header>
                <ContainerLogo>
                 <LogoLabefy src={Logo}/>
                <Labefy>Labefy</Labefy>
                </ContainerLogo>
                <ContainerFuncoes>
                <Funcoes>Premium</Funcoes>
                <Funcoes>Baixar</Funcoes>
                <VerPlaylists irParaLista={this.props.irParaLista} onClick={this.props.irParaLista}>Ver playlists</VerPlaylists>
                <Funcoes irParaCadastro={this.props.irParaHome} onClick={this.props.irParaHome}>Voltar para home</Funcoes>
                </ContainerFuncoes>
                </Header>

               
     <CardCriarPlaylist>
      
     <ContainerInfo>
       <h1>Crie sua playlist</h1>
       
       <Input 
       placeholder='Nome da playlist'
       value={this.state.nome}
       onChange={this.pegarNome}
       />
       <ContainerBotoes>
       <BotaoCriar onClick={this.fazerCadastro}>Criar Playlist</BotaoCriar>
       <BotaoVer onClick={this.props.irParaLista}>Ver playlists</BotaoVer>
       
       </ContainerBotoes>
       </ContainerInfo>
       </CardCriarPlaylist>
       <ContainerFooter>
                        <LogoFooter src={LabefyLogo}/>
                        <ContainerEmpresa>
                            <p>Empresa</p>
                            <FuncoesFooter>Sobre</FuncoesFooter>
                            <FuncoesFooter>Trabalhe conosco</FuncoesFooter>
                            </ContainerEmpresa>
                            <ContainerEmpresa>
                            <p>Links úteis</p>
                            <FuncoesFooter>Baixar</FuncoesFooter>
                            <FuncoesFooter>Criar playlist</FuncoesFooter>
                            <FuncoesFooter>Suporte</FuncoesFooter>
                            </ContainerEmpresa>
                            <ContainerEmpresa>
                            <a href="https://www.instagram.com/barbosabrendha/?hl=pt-br"> <Redes src={LogoIg} /></a>
                           <a href='https://www.linkedin.com/in/brendha-luiza-barbosa-587154201/'> <Redes src={LogoLinkedin} /></a>
                            <a href='https://github.com/BrendhaLuizaB'><Redes src={LogoGithub} /></a>
                            
                            </ContainerEmpresa>
                            
                            
                    </ContainerFooter>
                    <DesenvolvidoFooter>
                        <FraseFinal>Desenvolvido por Brendha Barbosa</FraseFinal>
                        </DesenvolvidoFooter>
      </div>
    );
    }
}