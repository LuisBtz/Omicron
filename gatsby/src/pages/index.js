import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const IndexPage = () => {
  return (
    <Layout >
      <Container>
        <h2>Instrucciones</h2>
        <div className='texto'>
            <p>Este es un riddle, un juego de acertijos basado en niveles.</p>
            <p>Cada nivel es consta de un misterio cuya solución es una palabra o conjunto de ellas, siempre en minúsculas.</p>
            <p>En cada nivel se te indicará el número de caracteres en que consta la respuesta.</p>
            <p>Cuando sepas la solución, ponla en la URL, justo después de la última “/”.</p>
        </div>
        <h2>Ahora</h2>
        <h3>¡Comienza!</h3>
        <p>10 caracteres</p>
      </Container>

    </Layout>
  )
}

const Container = styled.section`
    .texto {
    margin-top: 50px;
  }
  h2 {
    margin-top: 50px;
    font-size: 3rem;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
`


export default IndexPage

export const Head = () => (
  <Seo title='Omicron | Home' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )