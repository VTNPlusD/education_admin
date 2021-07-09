import { HomeFilled } from '@ant-design/icons'
import classes from 'styles/HeaderRoute.module.scss'
import { colors } from 'utils/colors'

type Props = {
  title: string
  icon: ReturnType<typeof HomeFilled>
}

const HeaderRoute = ({ title, icon }: Props) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <div style={styles.iconHomeContainer}>{icon}</div>
        <p>{title}</p>
      </div>
    </div>
  )
}

const styles = {
  iconHomeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 4,
    marginRight: 12,
    background: colors.PRIMARY_LINEAR_MAIN,
    boxShadow: '0px 3px 8.3px 0.7px rgba(163, 93, 255, 0.35)'
  }
}

export default HeaderRoute
