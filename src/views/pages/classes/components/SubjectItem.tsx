import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import VButton from 'components/button/VButton'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import classes from 'styles/ClassesManagement.module.scss'
import { colors, IColors } from 'utils/colors'
type Props = {
  subject: ISubject
  index: number
  handleDeleteSubject: () => void
  handleEditSubject: () => void
  handleViewSubject: () => void
}

const SubjectItem = ({
  subject,
  index,
  handleDeleteSubject,
  handleEditSubject,
  handleViewSubject
}: Props) => {
  const theme = useSelector((state: AppState) => state.common.theme)
  const { t } = useTranslation()

  return (
    <tr
      style={{
        backgroundColor: index % 2 ? colors.PRIMARY_GRAY : '#FFF',
        cursor: 'pointer',
        height: 40
      }}>
      <td style={{ paddingLeft: 8 }}>{subject.id} </td>
      <td>{subject.name} </td>
      <td>{subject.order}</td>
      <td>
        <div
          className={classes.active}
          style={{
            background: subject.active
              ? colors.STATUS_ACTIVE
              : colors.STATUS_BLOCK
          }}></div>
      </td>
      <td>
        <div style={{ display: 'flex' }}>
          <DeleteOutlined
            onClick={handleDeleteSubject}
            style={{ ...styles(theme).icon, ...{ marginRight: 8 } }}
          />
          <EditOutlined
            onClick={handleEditSubject}
            style={styles(theme).icon}
          />
        </div>
      </td>
      <td>
        <VButton onClick={handleViewSubject} title={t('classes.view')} />
      </td>
    </tr>
  )
}

const styles = (theme: IColors) => {
  const obj = { icon: {} }
  obj.icon = {
    padding: 8,
    borderRadius: 4,
    background: theme.PRIMARY_LINEAR_MAIN,
    color: theme.ICON
  }
  return obj
}

export default SubjectItem
