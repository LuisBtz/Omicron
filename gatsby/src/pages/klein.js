import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const KleinPage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 6</h2>
        <div className='texto' >
            <img className='dino' src='/Nivel6/dinosaurio.png' alt='Imagen' />
            <p>Tan grandes fueron las consecuencias de esta guerra, que aquel hombre perdió su riqueza, su cabeza y las de sus dinosaurios</p>
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
        <h2>¿Quién?</h2>
        <p>Cuatro caracteres</p>
        
        
        <div className='pistaOculta'>
          <img src='/nivel8/1/a.png'  alt='pista' className='pista oculta'/>
          <img src='/nivel8/1/n.png' alt='pista'  className='pista oculta'/>
        </div>
      </Container>

    </Layout>
  )
}

const Container = styled.section`
  .texto {
    margin-top: 50px;
    position: relative;
    .dino {
      width: 200px;
      margin-bottom: 20px;
    }
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


export default KleinPage

export const Head = () => (
  <Seo title='Omicron | Planeta X' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )