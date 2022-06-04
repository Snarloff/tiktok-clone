import {  ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/global'
import React from 'react'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}