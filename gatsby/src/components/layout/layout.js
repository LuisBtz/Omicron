import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
// import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"




function Layout({ children, dark }) {


  return (
    <>
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