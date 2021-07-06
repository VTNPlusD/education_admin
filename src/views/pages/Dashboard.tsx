import classes from 'styles/Dashboard.module.scss'
import { HomeFilled } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.iconHomeContainer}>
            <HomeFilled style={styles.iconHome} />
          </div>
          <p>
            {t('sideBar.dashboard.txtDashboard')}
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  iconHome: { color: '#FFF', fontSize: 11 }
}

export default Dashboard
