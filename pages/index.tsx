import { useCelebratedAge } from "components/celebrated-age-provider"
import { HeaderHeading } from "components/header-heading"
import { HeaderSubheading } from "components/header-subheading"
import { PageBody } from "components/page-body"
import { PageContent } from "components/page-content"
import { PageFooter } from "components/page-footer"
import { PageHead } from "components/page-head"
import { PageHeader } from "components/page-header"
import Link from "next/link"
import { CelebratedAgeProvider } from "components/celebrated-age-provider"
import { getOrdinalSuffix } from "utils"

const Countdown = () => {
  const { next: nextCelebratedAge } = useCelebratedAge()
  const ordinalSuffix = getOrdinalSuffix(nextCelebratedAge)

  return (
    <PageBody>
      <PageHead />
      <PageHeader>
        <HeaderHeading>{"Countdown"}</HeaderHeading>
        <HeaderSubheading>{`to my ${nextCelebratedAge}${ordinalSuffix} birthday`}</HeaderSubheading>
      </PageHeader>
      <PageContent>
        Home Page
        <Link href="/birthday">
          <a>Birthday</a>
        </Link>
      </PageContent>
      <PageFooter />
    </PageBody>
  )
}

const Page = () => (
  <CelebratedAgeProvider>
    <Countdown />
  </CelebratedAgeProvider>
)

export default Page
