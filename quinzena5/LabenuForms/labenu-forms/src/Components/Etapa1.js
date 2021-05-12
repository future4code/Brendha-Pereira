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

function Etapa1() {
  return (
    <div className="App">
   <Titulo> ETAPA1 - DADOS GERAIS </Titulo>
   <Perguntas>1. Qual o seu nome?</Perguntas>
   <Input/>   
   <Perguntas>2. Qual a sua idade?</Perguntas>
   <Input/> 
   <Perguntas>3. Qual o seu email?</Perguntas>
   <Input/> 
   <Perguntas>4. Qual a sua escolaridade?</Perguntas>
   <Select>
       <option>Ensino Médio incompleto</option>
       <option>Ensino Médio completo</option>
       <option>Ensino superior incompleto</option>
       <option>Ensino superior completo</option>
   </Select>
    
   
    </div>
  );
}

export default Etapa1;