import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import VButton from 'components/button/VButton'
import Image from 'components/image/Image'
import { IClass } from 'interfaces/interfaces/IClass'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import classes from 'styles/ClassesManagement.module.scss'
import { colors, IColors } from 'utils/colors'
import { getImgUrl } from 'utils/Functions'
type Props = {
  classItem: IClass
  index: number
  handleSelectItem: () => void
  handleDeleteItem: () => void
  handleView: () => void
}

const ClassItem = ({
  classItem,
  index,
  handleSelectItem,
  handleDeleteItem,
  handleView
}: Props) => {
  const theme = useSelector((state: AppState) => state.common.theme)
  const { t } = useTranslation()
  return (
    <tr
      style={{
        backgroundColor: index % 2 ? colors.PRIMARY_GRAY : '#FFF',
        cursor: 'pointer'
      }}>
      <td style={{ paddingLeft: 8 }}>{classItem.id} </td>
      <td>{classItem.name} </td>
      <td>{classItem.order}</td>
      <td>{classItem.type}</td>
      <td>
        <Image src={getImgUrl(classItem.iconName)} className={classes.icon} />
      </td>
      <td>
        <div
          className={classes.active}
          style={{
            background: classItem.active
              ? colors.STATUS_ACTIVE
              : colors.STATUS_BLOCK
          }}></div>
      </td>
      <td>
        <div style={{ display: 'flex' }}>
          <DeleteOutlined
            onClick={handleDeleteItem}
            style={{ ...styles(theme).icon, ...{ marginRight: 8 } }}
          />
          <EditOutlined onClick={handleSelectItem} style={styles(theme).icon} />
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

export default ClassItem
