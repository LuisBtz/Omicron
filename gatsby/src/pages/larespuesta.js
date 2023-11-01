import React from 'react'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import styled from 'styled-components';

const LarespuestaPage = () => {
  return (
    <Layout >
      <Container>
        <h2>NIVEL 1</h2>
        <div className='texto'>
            <img src='/Nivel1/FUSION_NUCLEAR.png' alt='imagen' />
        </div>
        <h2>¿Qué ocurre aquí?</h2>
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


export default LarespuestaPage

export const Head = () => (
  <Seo title='Omicron | La Respuesta' description='Acertijo de la boda de Sergio y Luisa.' image='/screenshot.png' />
  )