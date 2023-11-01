import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
// import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"
import AnimatedCursor from "react-animated-cursor"




function Layout({ children, dark }) {


  return (
    <>
        <AnimatedCursor
        innerSize={8}
        outerSize={58}
        color='255, 255, 255'
        outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid white'
  }}
        innerScale={0.7}
        outerScale={1.5}
        showSystemCursor={true}
        trailingSpeed={10}
        
        />
        <Normalizer />
        <Typography />
        <Header dark={dark} />
        <MainContainer>{children}</MainContainer>
        {/* <Footer /> */}
    </>
  )
}

const MainContainer = styled.main`
`


export default Layout