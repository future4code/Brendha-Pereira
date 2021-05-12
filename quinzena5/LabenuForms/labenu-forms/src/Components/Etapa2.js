import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
display: flex;
justify-content:center;
`
const Perguntas = styled.p`
display: flex;
justify-content:center;
font-weight: bold;
`
const Input = styled.input`
display:flex;
justify-content:center;
margin-left:44%;
`

function Etapa2() {
  return (
    <div className="App">
    <Titulo> ETAPA2 - INFORMAÇÕES DO ENSINO SUPERIOR </Titulo>
   <Perguntas>5. Qual curso?</Perguntas>
   <Input/>   
   <Perguntas>6. Qual a unidade de ensino?</Perguntas>
   <Input/> 
    </div>
  );
}

export default Etapa2;