import React from 'react'
import styled from 'styled-components'


const Titulo = styled.h1`
display: flex;
justify-content:center;
`
const Paragrafo = styled.p`
display: flex;
justify-content:center;
font-weight: bold;
`

function Final() {
  return (
    <div className="App">
     <Titulo>O FORMULÁRIO ACABOU</Titulo>
     <Paragrafo>Muito obrigado por participar! Entraremos em contato!</Paragrafo>
     
    </div>
  );
}

export default Final;