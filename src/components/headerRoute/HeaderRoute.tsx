import classes from 'styles/Dashboard.module.scss'

type Props = {
  title: string
  icon: any
}

const HeaderRoute = ({ title, icon }: Props) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <div className={classes.iconHomeContainer}>{icon}</div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default HeaderRoute
