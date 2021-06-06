import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../img/spotify.png'
import LabefyLogo from '../img/labefy-logo.png'
import LogoIg from '../img/logo-ig.png'
import LogoLinkedin from '../img/linkedin-logo.jpg'
import LogoGithub from '../img/github-logo.jpg'
import Trash from '../img/trash-2.svg'

const ListaDePlaylist = styled.div`
font-size:24px;
margin-left: 10px;
padding-left: 10px; 
padding-right: 10px;
margin-top: 10px;
align-items: center;
width: 433px;
height: 72px;
background: #2C373F;
border-radius: 33px;
display: flex;
justify-content: space-between;
`
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
const ContainerLista = styled.div`
padding-bottom: 10px;
margin-left: 28%;
margin-top: 5%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 40vw;
background-image: radial-gradient( circle 932px at 30.5% 52.9%,  rgba(69,82,91,1) 0%, rgba(187,187,187,1) 100.2%, rgba(187,187,187,1) 100.2% );
border-radius: 38px;
box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);

`
const ContainerInputBotao = styled.div`

margin-top: 15px;

`

const AdicionarPlaylist= styled.button`
border: none;
color: #EBE0D6;
background-color: #45525B;
width: 20vw;
height: 7vh;
border-radius: 38px;
margin-bottom: 30px;

:hover{
    transform: scale(0.9);
    color:#FE7E02;
}

`

const Detalhes = styled.button`
width: 92px;
height: 37px;
border-radius: 54px;
border: none;
margin-left: 50px;
color: #EBE0D6;
background-color: #45525B;
:hover{
    transform: scale(1.1);
    color:#FE7E02 ;
}
`

export default class TelaPlaylists extends React.Component {
    state={
        playlists: []
    }
    componentDidMount(){
       this.listaDePlaylist()
    }
    listaDePlaylist = async ()=>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
       
        try{
            const response = await axios.get(url, {
                headers:{
                    Authorization: 'brendha-munoz'
                }
            })
            console.log(response.data)
            this.setState({playlists: response.data.result.list})
        }catch(err){
            alert('ocorreu um erro, por favor tente novamente')
        }
      }

      apagarPlaylist = (id) =>{
          const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: 'brendha-munoz'
            }
        })
        .then((res)=>{
           alert('Playlist apagada!')
           this.listaDePlaylist()
        })
        .catch((err)=>{
            console.log(err.response.data)
            alert('não deu certo')
        })
      }
    render (){
        console.log(this.state)
    const suaPlaylist = this.state.playlists.map((playlist)=>{
        return <ListaDePlaylist key={playlist.id}>{playlist.name}
        <Detalhes>Detalhes</Detalhes>
        <img src={Trash} onClick={()=> this.apagarPlaylist(playlist.id)}/>
        </ListaDePlaylist>
    })
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
                <VerPlaylists>Ver playlists</VerPlaylists>
                <Funcoes irParaCadastro={this.props.irParaHome} onClick={this.props.irParaHome}>Voltar para home</Funcoes>
                </ContainerFuncoes>
                </Header>
                <ContainerLista>
        
         <h1>Suas playlists</h1>
         <ContainerInputBotao>
         <AdicionarPlaylist irParaHome={this.props.irParaCadastro}onClick={this.props.irParaCadastro}>Adicionar à playlist</AdicionarPlaylist>
         </ContainerInputBotao>
         {suaPlaylist}
         </ContainerLista>
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
                            <a href='https://github.com/BrendhaLuizaB'> <Redes src={LogoGithub} /></a>
                            
                            </ContainerEmpresa>
                            
                            
                    </ContainerFooter>
                    <DesenvolvidoFooter>
                        <FraseFinal>Desenvolvido por Brendha Barbosa</FraseFinal>
                        </DesenvolvidoFooter>
        </div>
      );
    }
    
  }

   // axios.get(url,{
        //     headers:{
        //         Authorization: 'brendha-munoz'
        //     }
        // }).then((res)=>{
        //  this.setState({usuarios: res.data})
        // })
        // .catch((err)=>{
        //   alert('ocorreu um erro, por favor tente novamente')
        // })
        // console.log(this.state)