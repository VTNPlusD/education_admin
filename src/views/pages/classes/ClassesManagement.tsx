import { ScheduleOutlined } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import VModal from 'components/modal/VModal'
import { IClass } from 'interfaces/interfaces/IClass'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { IAddClassRequest } from 'interfaces/request/IAddClassRequest'
import { IClassListRequest } from 'interfaces/request/IClassesListRequest'
import classes from 'styles/ClassesManagement.module.scss'
import { ADMIN_ROUTE, routesName } from 'views/routes/routes'
import ClassItem from './components/ClassItem'
import ModalCreateClass from './components/ModalCreateClass'
import ModalDelete from './components/ModalDelete'
import ModalUpdateClass from './components/ModalUpdateClass'

type Props = {
  getClassesListAction: (request?: IClassListRequest) => void
  addClass: (request: IAddClassRequest) => void
  updateClass: (request: IClass) => void
  deleteClass: (id: number) => void
  classesList: IClass[]
}

const ClassesManagement = ({
  getClassesListAction,
  addClass,
  updateClass,
  deleteClass,
  classesList
}: Props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const [isShowModal, setIsShowModal] = useState(false)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [order, setOrder] = useState<number>(0)
  const [active, setActive] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<number>(0)

  useEffect(() => {
    getClassesListAction()
  }, [getClassesListAction])

  const handleClickIconRight = () => {
    setName('')
    setType('')
    setImage('')
    setIsShowModal(true)
  }

  const handleChangName = (val: string) => {
    setName(val)
  }
  const handleChangType = (val: string) => {
    setType(val)
  }
  const handleChangeOrder = (val: number) => {
    setOrder(val)
  }
  const handleChangeImage = (name: string) => [setImage(name)]
  const handleChangeActive = (val: boolean) => {
    setActive(val)
  }
  const handleSubmitAddClass = () => {
    const val = { name, type, iconName: image }
    addClass(val)
    setIsShowModal(false)
  }

  const handleSelectItem = (item: IClass) => {
    setIsUpdate(true)
    setId(item.id)
    setName(item.name)
    setType(item.type)
    setImage(item.iconName)
    setOrder(item.order)
    setActive(item.active)
  }

  const handleSubmitUpdateClass = () => {
    const val = { id, name, type, iconName: image, order, active }
    updateClass(val)
    setIsUpdate(false)
  }

  const handleDeleteItem = (id: number) => {
    setDeleteId(id)
    setIsDelete(true)
  }

  const handleSubmitDelete = () => {
    deleteClass(deleteId)
    setIsDelete(false)
  }

  const handleView = (id: number) => {
    history.push(
      ADMIN_ROUTE.concat(routesName.CLASSES_MANAGEMENT)
        .concat('/')
        .concat(id.toString())
    )
  }

  const renderModalCreate = () => {
    return (
      <VModal
        visible={isShowModal}
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
    )
  }

  const renderModalUpdate = () => {
    return (
      <VModal
        visible={isUpdate}
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
            handleChangeOrder={handleChangeOrder}
            handleChangeImage={handleChangeImage}
            handleChangeActive={handleChangeActive}
          />
        }
      />
    )
  }

  const renderModalDelete = () => {
    return (
      <VModal
        visible={isDelete}
        title={t('sideBar.classesManagement.delete')}
        handleOk={handleSubmitDelete}
        handleCancel={() => setIsDelete(false)}
        content={<ModalDelete />}
      />
    )
  }

  const renderTable = () => {
    return (
      <table className={classes.tableContainer}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th> {t('management.id')} </th>
            <th> {t('management.name')} </th>
            <th> {t('management.order')} </th>
            <th> {t('management.type')} </th>
            <th> {t('management.iconName')} </th>
            <th> {t('management.active')} </th>
            <th> {t('management.action')} </th>
            <th> {t('management.view')} </th>
          </tr>
        </thead>
        <tbody className={classes.tableContainer}>
          {classesList.map((classItem, index) => (
            <ClassItem
              handleDeleteItem={() => handleDeleteItem(classItem.id)}
              handleSelectItem={() => handleSelectItem(classItem)}
              handleView={() => handleView(classItem.id)}
              key={classItem.id}
              classItem={classItem}
              index={index}
            />
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        title={t('sideBar.classesManagement.txtClassesManagement')}
        Icon={ScheduleOutlined}
        iconRight={true}
        handleClickIconRight={handleClickIconRight}
      />
      {isShowModal ? renderModalCreate() : <></>}
      {isUpdate ? renderModalUpdate() : <></>}
      {isDelete ? renderModalDelete() : <></>}
      {renderTable()}
    </div>
  )
}

export default ClassesManagement
