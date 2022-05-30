import DealsPage from "../components/deals/DealsPage"

const HomePage = props => {
  return (
    <DealsPage
      title='Vacation, found.'
      subtitle='Don’t let a tight budget scare you away from traveling. We’ve spotted some scary good deals.'
      image={{
        path: '/scott.svg',
        alt: "Scott's Cheap Flights"
      }}
      headerBackgroundColor="#FFF6ED"
      deals={props.deals}
    />   
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