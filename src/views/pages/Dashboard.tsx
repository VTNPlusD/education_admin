import { HomeFilled } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()
  return (
    <div>
      <HeaderRoute
        title={t('sideBar.classesManagement.txtClassesManagement')}
        icon={<HomeFilled style={styles.iconHome} />}
      />
    </div>
  )
}

const styles = {
  iconHome: { color: '#FFF', fontSize: 11 }
}

export default Dashboard
