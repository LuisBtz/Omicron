import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const CopePage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 7</h2>
        <div className='texto' >
            <img src='/Nivel7/magico.png' alt='Imagen' />
            <h2>Anagrama</h2>
            <p>1=O  2=R  3=U  4=E  5=R  6=O 7=E  8=A  9=B  10=G  11=R  12=S  13=E  14=Ñ  15=A  16=D</p>
        </div>
        <div className='pista' dangerouslySetInnerHTML={{__html:`
        <!-- 
        /////////////////
        ////////////////
        PISTA:  
        La constante mágica es 34.
        Los colores similares deben cumplirla.

        ////////////////
        /////////////// 
        -->
        `}}></div>
        {/* <h2>¿Quién?</h2> */}
        <p>Once caracteres</p>
        
        

        <div className='pistaOculta'>
          <img src='/nivel8/1/c.png'  alt='pista' className='pista oculta'/>
          <img src='/nivel8/1/u.png' alt='pista'  className='pista oculta'/>
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


export default CopePage

export const Head = () => (
  <Seo title='Omicron | Planeta X' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )