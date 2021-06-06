import React from 'react'
import './App.css';
import TelaPrincipal from './Components/telaPrincipal'
import TelaCriarPlaylists from './Components/telaCriarPlaylist'
import TelaPlaylists from './Components/telaPlaylists'




export default class App extends React.Component {
  state= {
    telaAtual: 'home',
    searchInputArea: ''
  }
  searchInput = (e) => this.funcToUpdateComponentsByInputSearch(e)
  funcToUpdateComponentsByInputSearch = (e) => {
      this.setState({
          searchInputArea: e.target.value,
      })
  }
  escolherTela = () => {
    switch (this.state.telaAtual){
      case 'home':
      return <TelaPrincipal irParaCadastro={this.irParaCadastro} irParaLista={this.irParaLista}/>
      case 'cadastro':
        return <TelaCriarPlaylists irParaLista={this.irParaLista}  irParaHome={this.irParaHome}/>
        case 'lista':
          return  <TelaPlaylists irParaHome={this.irParaHome} irParaCadastro={this.irParaCadastro}/>
          default:
            return <div>Erro! página não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: 'cadastro'})
  }

  irParaLista = () =>{
    this.setState({telaAtual: 'lista'})
  }
  irParaHome = () => {
    this.setState({telaAtual: 'home'})
  }
  

  render(){
    console.log(this.state)
    return (
      <div >
         {this.escolherTela()}
       
        </div>
      );
  }
  

}





