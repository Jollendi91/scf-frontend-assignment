import classes from './Deal.module.css'

import DealBanner from './DealBanner'

const Deal = props => {
  return (
    <div
      className={classes.deal}
      style={{ backgroundImage: `url(${props.image})` }}
    >
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