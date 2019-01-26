import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const ThemeContext = React.createContext({
  value: false,
  toggleTheme: () => {},
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: Raleway, sans-serif;
    width: 100vw;
    overflow-x: hidden;
  }
`

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        value: !state.value,
      }))
    }
    this.state = { value: false, toggleTheme: this.toggleTheme }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeContext.Provider value={this.state}>
        <Container>
          <GlobalStyle />
          <Component {...pageProps} />
        </Container>
      </ThemeContext.Provider>
    )
  }
}
