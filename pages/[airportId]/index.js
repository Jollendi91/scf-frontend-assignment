import DealsPage from "../../components/deals/DealsPage"

const AirportDealsPage = props => {
  const { location, deals } = props

  const title = `Hello, ${location}!`
  const subtitle = `I’m sure ${location} is pretty great, but wouldn’t you rather be somewhere else?`
  return (
    <DealsPage
      title={title}
      subtitle={subtitle}
      isHomeAirport={true}
      image={{
        path: '/scott.svg',
        alt: "Scott's Cheap Flights"
      }}
      deals={deals}
    />
  )
}

export async function getStaticPaths () {
  const response = await fetch('https://api.scottscheapflights.com/workers/recent-deals')
  const { data } = await response.json()

  const airportIds = data.deals.map(deal => ({ params: { airportId: deal.originIata }}))

  return {
    fallback: 'blocking',
    paths: airportIds
  }
}

export async function getStaticProps (context) {
  const { airportId } = context.params

  const response = await fetch(`https://api.scottscheapflights.com/workers/recent-deals?airport_code=${airportId}`)
  const { data } = await response.json()

  return {
    props: {
      location: data.nearestAirport.city,
      deals: data.deals
    },
    revalidate: 10
  }
}

export default AirportDealsPage