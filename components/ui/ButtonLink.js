import Link from 'next/link'

import classes from './ButtonLink.module.css'

const ButtonLink = props => {
  return (
    <Link href={props.href} {...props.linkOptions}>
      <button className={`${classes.button} ${props.className || ''}`}>
        {props.label}
      </button>
    </Link>
  )
}

export default ButtonLink