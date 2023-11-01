import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const FusionnuclearPage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 2</h2>
        <div className='texto' >
            <p>0, 88, 225, 365, 687, 4333, 10759, 30688, 60182, X</p>
        </div>
        <div className='pista' dangerouslySetInnerHTML={{__html:`
        <!-- 
        /////////////////
        ////////////////
        PISTA:  
        Debería ser MUY grande
        ////////////////
        /////////////// 
        -->
        `}}></div>
        <h2>¿Qué?</h2>
        <p>Ocho caracteres</p>
        
        
        <div className='pistaOculta'>
          <img src='/nivel8/2/l.png'  alt='pista'  className='pista oculta'/>
          <img src='/nivel8/3/e.png' alt='pista'  className='pista oculta'/>
        </div>
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


export default FusionnuclearPage

export const Head = () => (
  <Seo title='Omicron | Fusion Nuclear' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )