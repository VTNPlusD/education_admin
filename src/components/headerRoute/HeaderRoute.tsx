import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import classes from 'styles/HeaderRoute.module.scss'

type Props = {
  title: string
  Icon: any
}

const HeaderRoute = ({ title, Icon }: Props) => {
  const theme = useSelector((state: AppState) => state.common.theme)
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <div
          style={{
            ...styles.iconHomeContainer,
            ...{ background: theme.PRIMARY_LINEAR_MAIN }
          }}>
          <Icon style={{ color: theme.ICON }} />
        </div>
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
    boxShadow: '0px 3px 8.3px 0.7px rgba(163, 93, 255, 0.35)'
  }
}

export default HeaderRoute
