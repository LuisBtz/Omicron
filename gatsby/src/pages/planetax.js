import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const PlanetaxPage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 3</h2>
        <div className='texto' >
            <img src='/Nivel3/pokemon.png' alt='Imagen' />
            <img className='outline' src='/Nivel3/outline.png' alt='Imagen' />
        </div>
        {/* <div className='pista' dangerouslySetInnerHTML={{__html:`
        <!-- 
        /////////////////
        ////////////////
        PISTA:  
        Debería ser MUY grande
        ////////////////
        /////////////// 
        -->
        `}}></div> */}
        <h2>¿Pseudo...?</h2>
        <p>Cinco caracteres</p>
        
        
        <div className='pistaOculta'>
          <img src='/nivel8/2/c.png' alt='pista'  className='pista oculta'/>
          <img src='/nivel8/2/e.png' alt='pista'  className='pista oculta'/>
        </div>
        
      </Container>

    </Layout>
  )
}

const Container = styled.section`
  .texto {
    margin-top: 50px;
    position: relative;
    .outline {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
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


export default PlanetaxPage

export const Head = () => (
  <Seo title='Omicron | Planeta X' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )