import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'
import React from 'react'
import styled from 'styled-components'

const BotãoProximaEtapa = styled.button`
display:flex;
justify-content:center;
margin-left:47%;
margin-top: 20px;
`

class App extends React.Component {
  state = {
    etapa : 1,
  }
  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1: 
      return <Etapa1 />
      case 2:
      return <Etapa2/>
      case 3:
      return <Etapa3/>
      case 4: 
      return <Final />
     }

 } 

 irParaProximaEtapa = () => {
 this.setState({etapa: this.state.etapa +1})
 }

 
  
 render(){
    return (
      <div>
       {/* <Etapa1></Etapa1> */}
       {this.renderizaEtapa()}
     ({this.state.etapa !== 4 ? <BotãoProximaEtapa onClick={this.irParaProximaEtapa}>Próxima Etapa</BotãoProximaEtapa> : false})

      </div>
    );
  }
  }
 
  


export default App;
