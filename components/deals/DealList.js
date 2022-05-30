import classes from './DealList.module.css'

import Deal from './Deal'

const DealList = props => {
  return (
    <div>
      <p className={classes.heading}>
        {props.title}
      </p>
      <div className={classes.deals}>
        <Deal
          image="https://d31v0nytu7av7q.cloudfront.net/city_images/images/000/000/297/small/Depositphotos_9329203_xl-2015.jpg?1617294479"
        />
      </div>
    </div>
  )
}

export default DealList