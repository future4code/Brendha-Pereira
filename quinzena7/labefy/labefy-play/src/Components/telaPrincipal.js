import React from 'react'
import styled from 'styled-components'
import Logo from '../img/spotify.png'
import Imagem from '../img/ouvindo-musica.jpg'
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
const TextoPrincipal = styled.h1`
display: flex;
justify-content: space-between;
margin: 50px;
font-size: 36px;
letter-spacing: 3px;
font-weight: bold;
`
const CrieSuaPlaylist = styled.button`
margin-left: 40px;
color: #EBE0D6;
background-color: #45525B;
width: 198px;
height: 57px;
border-radius: 58px;
border: none;
font-size: 18px;

:hover{
    color:#FE7E02;
}
:active{
    transform: scale( 0.9)
}
`

const VerMinhasPlaylists = styled.p`
color: black;
cursor: pointer;
margin-left: 60px;
margin-top: 20px;
:hover{
    color: rgba(254, 128, 2);
    }
`
const ContainerImg = styled.div`
display: flex;
justify-content: space-between;
`
const MulherMusica = styled.img`
height: 60vh;
width: 35vw;
margin-right: 12%;
margin-top: 5%;
border-radius:50%;
opacity: 0.6;
`
const ContainerTextoBotao = styled.div`
display: flex;
flex-direction: column;
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
export default class telaPrincipal extends React.Component {
    render() {
        return (
            <div>
                <Header>
                <ContainerLogo>
                 <LogoLabefy src={Logo}/>
                <Labefy>Labefy</Labefy>
                </ContainerLogo>
                <ContainerFuncoes>
                <Funcoes>Premium</Funcoes>
                <Funcoes>Baixar</Funcoes>
                <VerPlaylists irParaLista={this.props.irParaLista} onClick={this.props.irParaLista}>Ver playlists</VerPlaylists>
                <Funcoes irParaCadastro={this.props.irParaCadastro} onClick={this.props.irParaCadastro}>Criar uma playlist</Funcoes>
                </ContainerFuncoes>
                </Header>
                <ContainerImg>
                <ContainerTextoBotao>
                    <TextoPrincipal>Curta suas músicas <br/>
                    favoritas  <br/>
                    em um  <br/>
                    só lugar
                    </TextoPrincipal>
                    <CrieSuaPlaylist irParaCadastro={this.props.irParaCadastro} onClick={this.props.irParaCadastro}>Crie sua playlist</CrieSuaPlaylist>
                    <VerMinhasPlaylists irParaLista={this.props.irParaLista} onClick={this.props.irParaLista}>Ver minhas playlist</VerMinhasPlaylists>
                    </ContainerTextoBotao>
                    
                    <MulherMusica src={Imagem}/>
                    </ContainerImg>

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
                            <a href="https://www.instagram.com/barbosabrendha/?hl=pt-br">  <Redes src={LogoIg} /></a>
                            <a href='https://www.linkedin.com/in/brendha-luiza-barbosa-587154201/'><Redes src={LogoLinkedin} /></a>
                            <a href='https://github.com/BrendhaLuizaB'> <Redes src={LogoGithub} /></a>
                            
                            </ContainerEmpresa>
                            
                            
                    </ContainerFooter>
                    <DesenvolvidoFooter>
                        <FraseFinal>Desenvolvido por Brendha Barbosa</FraseFinal>
                        </DesenvolvidoFooter>
                    
            </div>
        )
    }
}
