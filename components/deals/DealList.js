import classes from './DealList.module.css'

import Deal from './Deal'

const DealList = props => {
  return (
    <div>
      <p className={classes.heading}>
        {props.title}
      </p>
      <div className={classes.deals}>
        {props.deals && props.deals.map(deal => {
          return <Deal
            key={`${deal.foundDate}-${deal.destinationName}`}
            deal={deal} 
          />
        })}
      </div>
    </div>
  )
}

export default DealList