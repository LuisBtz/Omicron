import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const TrecedeseptiembrePage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 9</h2>
        <div className='texto' >
            <img src='/Nivel9/nueve.png' alt='Imagen' />
            {/* <h2>Anagrama</h2> */}
            {/* <p>La aparición de esta criatura desconcertó a un pequeño poblado. La oscuridad ocultó tanto a este ser, como a las piezas de las que esta conformado.</p> */}
        </div>
        <div className='pista' dangerouslySetInnerHTML={{__html:`
        <!-- 
        /////////////////
        ////////////////
        PISTA:  
        Ya, ya. Querías otra ayuda, ¿cierto? No esta vez. Toda pista que buscas se encuentra a la vista… aunque no precisamente en el mismo sitio.
Quizás necesites ver más allá…
Y hacer un recuento en retrospectiva.
En tus vivencias…
En tus memorias…

        ////////////////
        /////////////// 
        -->
        `}}></div>
        <h2>¿Quién?</h2>
        <p>Siete caracteres</p>
        
        
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


export default TrecedeseptiembrePage

export const Head = () => (
  <Seo title='Omicron | Planeta X' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )