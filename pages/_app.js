import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: Circular, sans-serif;
    width: 100vw;
    overflow-x: hidden;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}