import { Page } from "components/page"
import { PageFooter } from "components/page-footer"
import { PageHead } from "components/page-head"
import { PageHeader } from "components/page-header"

const HomePage = () => {
  return (
    <Page>
      <PageHead />
      <PageHeader nextCelebratedAge={31} />
      Home Page
      <PageFooter />
    </Page>
  )
}

export default HomePage
