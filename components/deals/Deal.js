import classes from './Deal.module.css'

import ButtonLink from '../ui/ButtonLink'
import DealBanner from './DealBanner'


const Deal = props => {
  const { normalPrice, price, originIata, destinationIata, featureImageUrl } = props.deal
  return (
    <div
      className={`${classes.deal} ${props.className || ''}`}
      style={{ backgroundImage: `url(${featureImageUrl})` }}
    >
      <ButtonLink
        className={classes.button}
        href={`/${originIata}`}
        label={`See more ${originIata}`}
      />
      <DealBanner
        className={classes.banner}
        normalPrice={normalPrice.formatted}
        dealPrice={price.formatted}
        originIata={originIata}
        destinationIata={destinationIata}
      />
    </div>
  )
}

export default Deal