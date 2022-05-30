import classes from './DealBanner.module.css'

const DealBanner = props => {
  return (
    <div className={`${classes.banner} ${props.className ? props.className : ''}`}>
      <div className={classes.prices}>
        <span className={classes['normal-price']}>
          {props.normalPrice}
        </span>
        <span className={classes['deal-price']}>
          {props.dealPrice}
        </span>
      </div>
      <div className={classes.route}>
        <span>
          {props.originIata} to {props.destinationIata}
        </span>
      </div>
    </div>
  )
}

export default DealBanner