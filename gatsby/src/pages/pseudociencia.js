import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const PseudocienciaPage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 4</h2>
        <div className='texto' >
            <img src='/Nivel4/quark.png' alt='Imagen' />
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
        <h2>¿Cuál falta?</h2>
        <p>Siete caracteres</p>
        

        <div className='pistaOculta'>
          <img src='/nivel8/1/s.png' alt='pista'  className='pista oculta'/>
          <img src='/nivel8/1/e.png'  alt='pista' className='pista oculta'/>
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


export default PseudocienciaPage

export const Head = () => (
  <Seo title='Omicron | Planeta X' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )