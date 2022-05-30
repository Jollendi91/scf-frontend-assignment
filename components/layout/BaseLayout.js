import classes from './BaseLayout.module.css'

const BaseLayout = props => {
  return (
    <div className={classes.base}>
      <header
        className={classes.header}
        style={{ backgroundColor: props.headerBackgroundColor }}
      >
        <div className={classes.content}>
          <div>
            {props.headerPrimary}
          </div>
          <div>
            {props.headerSecondary}
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.content}>
          {props.children}
        </div>
      </main>
      {props.copyright && <div className={classes.copyright}>{props.copyright}</div>}
    </div>
  )
}

export default BaseLayout