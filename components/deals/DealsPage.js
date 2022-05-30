import { Fragment } from 'react'

import Image from 'next/image'
import BaseLayout from "../layout/BaseLayout"

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
      copyright='© 2022 Totally Fictitious Company'
    >
    
    </BaseLayout>
  )
}

export default DealsPage