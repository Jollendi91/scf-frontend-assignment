import { Fragment } from 'react'
import Head from 'next/head'

import DealsPage from "../components/deals/DealsPage"

const HomePage = props => {
  const subtitle = `Don’t let a tight budget scare you away from traveling. We’ve spotted some scary good deals.`

  return (
    <Fragment>
      <Head>
        <title>{`Scott's Cheap Flights - Recent Deals`}</title>
        <meta
          name='description'
          content={subtitle}
        />
      </Head>
      <DealsPage
        title='Vacation, found.'
        subtitle={subtitle}
        image={{
          path: '/scott.svg',
          alt: "Scott's Cheap Flights"
        }}
        headerBackgroundColor="#FFF6ED"
        deals={props.deals}
      />   
    </Fragment>
  )
}

export async function getStaticProps () {
  const response = await fetch('https://api.scottscheapflights.com/workers/recent-deals')
  const data = await response.json()

  const deals = data?.data?.deals || []
  
  return {
    props: {
      deals
    },
    revalidate: 10
  }
}

export default HomePage