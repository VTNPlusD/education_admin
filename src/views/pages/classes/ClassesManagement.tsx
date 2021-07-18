import { ScheduleOutlined } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import VModal from 'components/modal/VModal'
import { IClass } from 'interfaces/interfaces/IClass'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IAddClassRequest } from 'services/requests/IAddClassRequest'
import { IClassListRequest } from 'services/requests/IClassesListRequest'
import classes from 'styles/ClassesManagement.module.scss'
import ClassItem from './components/ClassItem'
import ModalCreateClass from './components/ModalCreateClass'
import ModalUpdateClass from './components/ModalUpdateClass'

type Props = {
  getClassesListAction: (request?: IClassListRequest) => void
  addClass: (request: IAddClassRequest) => void
  deleteClass: (id: number) => void
  classesList: IClass[]
}

const ClassesManagement = ({
  getClassesListAction,
  addClass,
  deleteClass,
  classesList
}: Props) => {
  const { t } = useTranslation()
  const [isShowModal, setIsShowModal] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [image, setImage] = useState('')
  const [order, setOrder] = useState<number | undefined>()
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    getClassesListAction()
  }, [getClassesListAction])

  const handleClickIconRight = () => {
    setIsShowModal(true)
  }

  const handleChangName = (val: string) => {
    setName(val)
  }
  const handleChangType = (val: string) => {
    setType(val)
  }
  const handleChangeImage = (name: string) => [setImage(name)]
  const handleSubmitAddClass = () => {
    const val = { name, type, iconName: image }
    addClass(val)
    setIsShowModal(false)
  }

  const handleSelectItem = (item: IClass) => {
    setIsUpdate(true)
    setName(item.name)
    setType(item.type)
    setImage(item.iconName)
    setOrder(item.order)
    setActive(item.active)
  }

  const handleSubmitUpdateClass = () => {}

  const handleDeleteItem = (id: number) => {
    deleteClass(id)
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        title={t('sideBar.classesManagement.txtClassesManagement')}
        Icon={ScheduleOutlined}
        iconRight={true}
        handleClickIconRight={handleClickIconRight}
      />
      {isShowModal ? (
        <VModal
          isModalVisible={isShowModal}
          title={t('sideBar.classesManagement.add')}
          handleCancel={() => setIsShowModal(false)}
          handleOk={handleSubmitAddClass}
          content={
            <ModalCreateClass
              handleChangName={handleChangName}
              handleChangType={handleChangType}
              handleChangeImage={handleChangeImage}
            />
          }
        />
      ) : (
        <></>
      )}
      {isUpdate ? (
        <VModal
          isModalVisible={isUpdate}
          handleCancel={() => setIsUpdate(false)}
          handleOk={handleSubmitUpdateClass}
          title={t('sideBar.classesManagement.update')}
          content={
            <ModalUpdateClass
              name={name}
              type={type}
              image={image}
              order={order}
              active={active}
              handleChangName={handleChangName}
              handleChangType={handleChangType}
              handleChangeImage={handleChangeImage}
            />
          }
        />
      ) : (
        <></>
      )}

      <table className={classes.tableContainer}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th> {t('classes.id')} </th>
            <th> {t('classes.name')} </th>
            <th> {t('classes.order')} </th>
            <th> {t('classes.type')} </th>
            <th> {t('classes.iconName')} </th>
            <th> {t('classes.active')} </th>
            <th> {t('classes.action')} </th>
          </tr>
        </thead>
        <tbody className={classes.tableContainer}>
          {classesList.map((classItem, index) => (
            <ClassItem
              handleDeleteItem={() => handleDeleteItem(classItem.id)}
              handleSelectItem={() => handleSelectItem(classItem)}
              key={classItem.id}
              classItem={classItem}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClassesManagement
