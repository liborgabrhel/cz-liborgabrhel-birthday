import { CelebratedAgeProvider, useCelebratedAge } from "components/celebrated-age-provider"
import { HeaderHeading } from "components/header-heading"
import { HeaderSubheading } from "components/header-subheading"
import { PageBody } from "components/page-body"
import { PageContent } from "components/page-content"
import { PageFooter } from "components/page-footer"
import { PageHeader } from "components/page-header"
import Link from "next/link"
import { getOrdinalSuffix } from "utils"

const Birthday = () => {
  const { current: currentCelebratedAge } = useCelebratedAge()
  const ordinalSuffix = getOrdinalSuffix(currentCelebratedAge)

  return (
    <PageBody>
      <PageHeader>
        <HeaderHeading>{"Hooray!"}</HeaderHeading>
        <HeaderSubheading>{`It is my ${currentCelebratedAge}${ordinalSuffix} birthday`}</HeaderSubheading>
      </PageHeader>
      <PageContent>
        <Link href="/">
          <a>Go to countdown to my next birthday</a>
        </Link>
      </PageContent>
      <PageFooter />
    </PageBody>
  )
}

const Page = () => (
  <CelebratedAgeProvider>
    <Birthday />
  </CelebratedAgeProvider>
)

export default Page
