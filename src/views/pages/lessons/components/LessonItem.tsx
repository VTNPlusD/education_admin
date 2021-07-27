import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import VButton from 'components/button/VButton'
import { ILesson } from 'interfaces/interfaces/ILesson'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import classes from 'styles/ClassesManagement.module.scss'
import { colors, IColors } from 'utils/colors'
type Props = {
  lesson: ILesson
  index: number
  handleDelete: () => void
  handleEdit: () => void
  handleView: () => void
}

const LessonItem = ({
  lesson,
  index,
  handleDelete,
  handleEdit,
  handleView
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
      <td style={{ paddingLeft: 8 }}>{lesson.id} </td>
      <td>{lesson.name} </td>
      <td>{lesson.order}</td>
      <td>
        <div
          className={classes.active}
          style={{
            background: lesson.active
              ? colors.STATUS_ACTIVE
              : colors.STATUS_BLOCK
          }}></div>
      </td>
      <td>
        <div style={{ display: 'flex' }}>
          <DeleteOutlined
            onClick={handleDelete}
            style={{ ...styles(theme).icon, ...{ marginRight: 8 } }}
          />
          <EditOutlined onClick={handleEdit} style={styles(theme).icon} />
        </div>
      </td>
      <td>
        <VButton onClick={handleView} title={t('management.view')} />
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

export default LessonItem
