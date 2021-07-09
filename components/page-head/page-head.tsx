import { ReactNode } from "react"
import Head from "next/head"
import { Favicon } from "components/page-head/favicon"
import isEmpty from "lodash.isempty"

const SITE_TITLE = "Birthday Countdown"

const getTitle = (pageTitle: string | undefined): string =>
  isEmpty(pageTitle) ? SITE_TITLE : `${pageTitle} | ${SITE_TITLE}`

/**
 * Component
 */

type Props = {
  pageTitle?: string
  children?: ReactNode
}

export const PageHead = ({ pageTitle, children }: Props) => (
  <Head>
    <title>{getTitle(pageTitle)}</title>
    <Favicon />
    {children}
  </Head>
)
