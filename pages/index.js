import DealsPage from "../components/deals/DealsPage"


const HomePage = () => {
  return (
    <DealsPage
      title='Vacation, found.'
      subtitle='Don’t let a tight budget scare you away from traveling. We’ve spotted some scary good deals.'
      image={{
        path: '/scott.svg',
        alt: "Scott's Cheap Flights"
      }}
    >

    </DealsPage>
   
  )
}

export default HomePage