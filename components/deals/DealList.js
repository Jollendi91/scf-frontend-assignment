import classes from './DealList.module.css'

import Deal from './Deal'

const DealList = props => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        {props.title}
      </p>
      <div className={classes.deals}>
        {props.deals && props.deals.map(deal => {
          return <Deal
            className={classes.deal}
            key={`${deal.foundDate}-${deal.destinationName}`}
            deal={deal} 
          />
        })}
      </div>
    </div>
  )
}

export default DealList