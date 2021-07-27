import { ArrowLeftOutlined } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import VModal from 'components/modal/VModal'
import { IClass } from 'interfaces/interfaces/IClass'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import { IAddSubjectRequest } from 'interfaces/request/IAddSubjectRequest'
import classes from 'styles/ClassesManagement.module.scss'
import ModalAddSubject from './components/ModalAddSubject'
import ModalDeleteSubject from './components/ModalDeleteSubject'
import ModalEditSubject from './components/ModalEditSubject'
import SubjectItem from './components/SubjectItem'

type Props = {
  getClassDetail: (id: number) => void
  addSubject: (request: IAddSubjectRequest) => void
  deleteSubject: (id: number) => void
  updateSubject: (subject: ISubject) => void
  classDetail: IClass
}

const ClassDetail = ({
  getClassDetail,
  addSubject,
  deleteSubject,
  updateSubject,
  classDetail
}: Props) => {
  const params: any = useParams()
  const id = Number(params.id)
  const { t } = useTranslation()
  const history = useHistory()
  const [modalAddVisible, setModalAddVisible] = useState<boolean>(false)
  const [modalEditVisible, setModalEditVisible] = useState<boolean>(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [name, setname] = useState<string>('')
  const [order, setOrder] = useState<string>('')
  const [active, setActive] = useState<boolean>(false)
  const [subjectId, setSubjectid] = useState<number>(0)
  const [deleteId, setDeleteId] = useState<number>(0)

  useEffect(() => {
    if (id) {
      getClassDetail(id)
    }
  }, [id, getClassDetail])

  const handleClickIconRight = () => {
    setname('')
    setModalAddVisible(true)
  }

  const handleChangeName = (val: string) => {
    setname(val)
  }

  const handleAddSubject = () => {
    const val = { name, classId: [id] }
    addSubject(val)
    setModalAddVisible(false)
  }

  const handleDeleteSubject = (id: number) => {
    setIsDelete(true)
    setDeleteId(id)
  }

  const handleSubmitDelete = () => {
    deleteSubject(deleteId)
    setIsDelete(false)
  }

  const handleEditSubject = (subject: ISubject) => {
    setname(subject.name)
    setOrder(subject.order.toString())
    setActive(subject.active)
    setSubjectid(subject.id)
    setModalEditVisible(true)
  }

  const handleChangeOrder = (val: string) => {
    setOrder(val)
  }

  const handleChangeActive = (val: boolean) => {
    setActive(val)
  }
  const handleUpdateSubject = () => {
    const val = { id: subjectId, name, order: parseInt(order), active }
    updateSubject(val)
    setModalEditVisible(false)
  }

  const handleViewSubject = (idSubject: number) => {
    history.push(id.toString().concat('/').concat(idSubject.toString()))
  }

  const handleGoBack = () => {
    history.goBack()
  }

  const renderModalAddSubject = () => {
    return (
      <VModal
        handleCancel={() => setModalAddVisible(false)}
        handleOk={handleAddSubject}
        title={t('subject.add')}
        content={<ModalAddSubject handleChangeName={handleChangeName} />}
        visible={modalAddVisible}
      />
    )
  }

  const renderModalEditSubject = () => {
    return (
      <VModal
        handleCancel={() => setModalEditVisible(false)}
        handleOk={handleUpdateSubject}
        visible={modalEditVisible}
        title={t('subject.edit')}
        content={
          <ModalEditSubject
            name={name}
            order={order}
            active={active}
            handleChangeName={handleChangeName}
            handleChangeOrder={handleChangeOrder}
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
        handleCancel={() => setIsDelete(false)}
        handleOk={handleSubmitDelete}
        title={t('subject.delete')}
        content={<ModalDeleteSubject />}
      />
    )
  }

  const renderListSubject = () => {
    return (
      <>
        <h2 style={{ textAlign: 'center', marginBottom: 8 }}>
          {' '}
          {t('subject.list')}
        </h2>
        <table className={classes.tableContainer}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th> {t('management.id')} </th>
              <th> {t('management.name')} </th>
              <th> {t('management.order')} </th>
              <th> {t('management.active')} </th>
              <th> {t('management.action')} </th>
              <th> {t('management.view')} </th>
            </tr>
          </thead>
          <tbody className={classes.tableContainer}>
            {classDetail.__subjects__ &&
              classDetail.__subjects__.map((subject, index) => (
                <SubjectItem
                  handleDeleteSubject={() => handleDeleteSubject(subject.id)}
                  handleEditSubject={() => handleEditSubject(subject)}
                  handleViewSubject={() => handleViewSubject(subject.id)}
                  key={subject.id}
                  subject={subject}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </>
    )
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        handleClickIconLeft={handleGoBack}
        title={classDetail.name}
        Icon={ArrowLeftOutlined}
        iconRight={true}
        handleClickIconRight={handleClickIconRight}
      />
      {modalAddVisible ? renderModalAddSubject() : <></>}
      {modalEditVisible ? renderModalEditSubject() : <></>}
      {isDelete ? renderModalDelete() : <></>}
      {renderListSubject()}
    </div>
  )
}

export default ClassDetail
