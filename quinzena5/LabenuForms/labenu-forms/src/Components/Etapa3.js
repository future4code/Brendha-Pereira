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
const Select = styled.select`
display:flex;
justify-content:center;
margin-left:44%;
`

function Etapa3() {
  return (
    <div className="App">
    <Titulo> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </Titulo>
   <Perguntas>5. Por que você não terminou um curso de graduação?</Perguntas>
   <Input/>   
   <Perguntas>6. Você fez algum curso complementar?</Perguntas>
   <Select>
       <option>Nenhum </option>
       <option>Curso Técnico</option>
       <option>Curso de inglês</option>
   </Select> 
    </div>
  );
}

export default Etapa3;