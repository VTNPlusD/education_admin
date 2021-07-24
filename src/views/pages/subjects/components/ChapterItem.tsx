import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import VButton from 'components/button/VButton'
import { IChapter } from 'interfaces/interfaces/IChapter'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import classes from 'styles/ClassesManagement.module.scss'
import { colors, IColors } from 'utils/colors'
type Props = {
  chapter: IChapter
  index: number
}

const ChapterItem = ({ chapter, index }: Props) => {
  const theme = useSelector((state: AppState) => state.common.theme)
  const { t } = useTranslation()

  return (
    <tr
      style={{
        backgroundColor: index % 2 ? colors.PRIMARY_GRAY : '#FFF',
        cursor: 'pointer',
        height: 40
      }}>
      <td style={{ paddingLeft: 8 }}>{chapter.id} </td>
      <td>{chapter.name} </td>
      <td>{chapter.order}</td>
      <td>
        <div
          className={classes.active}
          style={{
            background: chapter.active
              ? colors.STATUS_ACTIVE
              : colors.STATUS_BLOCK
          }}></div>
      </td>
      <td>
        <div style={{ display: 'flex' }}>
          <DeleteOutlined
            style={{ ...styles(theme).icon, ...{ marginRight: 8 } }}
          />
          <EditOutlined style={styles(theme).icon} />
        </div>
      </td>
      <td>
        <VButton title={t('classes.view')} />
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

export default ChapterItem
