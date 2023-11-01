import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const ExtranoPage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 5</h2>
        <div className='texto' >
            <img src='/Nivel5/klein.png' alt='Imagen' />
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
        <h2>¿Qué tienen en común?</h2>
        <p>Cinco caracteres</p>
        
        
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


export default ExtranoPage

export const Head = () => (
  <Seo title='Omicron | Planeta X' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )