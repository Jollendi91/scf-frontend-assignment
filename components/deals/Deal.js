import classes from './Deal.module.css'

import ButtonLink from '../ui/ButtonLink'
import DealBanner from './DealBanner'


const Deal = props => {
  return (
    <div
      className={classes.deal}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <ButtonLink
        className={classes.button}
        href="/LAX"
        label="See more LAX"
      />
      <DealBanner
        className={classes.banner}
        normalPrice='$220'
        dealPrice='$177'
        originIata='LAX'
        destinationIata='DTW'
      />
    </div>
  )
}

export default Deal