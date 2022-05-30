import classes from './BaseLayout.module.css'

const BaseLayout = props => {
  return (
    <div>
      <header className={classes.header}>
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