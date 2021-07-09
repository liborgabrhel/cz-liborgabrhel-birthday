import { Fragment } from "react"
import type { AppProps } from "next/app"
import { GlobalStyle } from "components/global-style"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
