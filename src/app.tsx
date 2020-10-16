import { Countdown } from "components/countdown"
import { Dialog } from "components/dialog"
import { Footer } from "components/footer"
import { GlobalStyle } from "components/global-style"
import { Header } from "components/header"
import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "redux-store"
import styled from "styled-components"

type Props = {
  children?: never
}

export const App: React.FunctionComponent<Props> = () => {
  return (
    <ReduxProvider store={store}>
      <Container>
        <GlobalStyle/>
        <Background/>
        <Header/>
        <Countdown/>
        <Footer/>
        <Dialog/>
      </Container>
    </ReduxProvider>
  )
}

/**
 * Styled components
 */

export const Container = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 200px auto 60px;
  grid-template-areas:
    "header"
    "countdown"
    "footer";
  width: 100%;
  height: 100vh;
  min-height: 600px;
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
`
