import Image from 'next/image'

import BaseLayout from "../layout/BaseLayout"
import DealList from './DealList'

import classes from './DealsPage.module.css'

const DealsPage = props => {
  const headerPrimary = (
    <div className={classes.headerText}>
      <h1 className={classes.title}>
        {props.title}
      </h1>
      <p className={classes.subtitle}>
        {props.subtitle}
      </p>
    </div>
  )

  const headerSecondary = (
    <div className={classes.image}>
      <Image
        className={classes.image}
        src={props.image.path}
        alt={props.image.alt}
        layout='fill'
      />
    </div>
  )

  return (
    <BaseLayout
      headerPrimary={headerPrimary}
      headerSecondary={headerSecondary}
      headerBackgroundColor={props.isHomeAirport ? '#ECFAF6' : '#FFF6ED' }
      copyright='© 2022 Totally Fictitious Company'
    >
      <DealList
        title="Our top finds this month"
        deals={props.deals}
        showButtons={!props.isHomeAirport}
      />
    </BaseLayout>
  )
}

export default DealsPage