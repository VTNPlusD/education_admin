import { ArrowLeftOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import VModal from 'components/modal/VModal'
import { IChapter } from 'interfaces/interfaces/IChapter'
import { IClass } from 'interfaces/interfaces/IClass'
import { IPagination } from 'interfaces/interfaces/IPayload'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import { IAddChapterRequest } from 'interfaces/request/IAddChapterRequest'
import { IListRequest } from 'interfaces/request/IListRequest'
import classes from 'styles/ClassesManagement.module.scss'
import ChapterItem from './components/ChapterItem'
import ModalAddChapter from './components/ModalAddChapter'
import { listChapterRequest } from 'services/requests/listChapterRequest'

type Params = {
  classId: string
  subjectId: string
}

type Props = {
  getSubject: (id: number) => void
  getClassDetail: (id: number) => void
  addChapter: (request: IAddChapterRequest, callback: () => void) => void
  getListChapter: (request?: IListRequest) => void
  subjectDetail: ISubject
  classDetail: IClass
  listChapter: IPagination<IChapter[]>
}

const SubjectDetail = ({
  getSubject,
  getClassDetail,
  getListChapter,
  addChapter,
  listChapter,
  subjectDetail,
  classDetail
}: Props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const { classId, subjectId } = useParams<Params>()
  const [modalAddChapter, setModalAddChapter] = useState<boolean>(false)
  const [refreshList, setRefreshList] = useState<boolean | undefined>()
  const [name, setName] = useState<string>('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState<number>(10)

  useEffect(() => {
    if (subjectId) {
      getSubject(parseInt(subjectId))
    }
  }, [subjectId, getSubject])

  useEffect(() => {
    if (classId && classDetail.id === 0) {
      getClassDetail(parseInt(classId))
    }
  }, [classId, getClassDetail, classDetail.id])

  useEffect(() => {
    if (refreshList === true || refreshList === undefined) {
      const request = listChapterRequest(page, limit, subjectId)
      getListChapter(request)
      setRefreshList(false)
    }
  }, [getListChapter, subjectId, page, limit, refreshList])

  const handleAddChapter = () => {
    setName('')
    setModalAddChapter(true)
  }

  const handleSubmitAddChapter = () => {
    const val = { name, subjectId: [parseInt(subjectId)] }
    addChapter(val, () => {
      setRefreshList(true)
    })
    setModalAddChapter(false)
  }

  const handleGoBack = () => {
    history.goBack()
  }

  const handleChangeName = (val: string) => {
    setName(val)
  }

  const handleChangePage = (page: number, pageSize?: number) => {
    setPage(page)
    setLimit(pageSize || 0)
    setRefreshList(true)
  }

  const renderListSubject = () => {
    return (
      <>
        <h2 style={{ textAlign: 'center', marginBottom: 8 }}>
          {' '}
          {t('chapter.list')}
        </h2>
        <table className={classes.tableContainer}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th> {t('chapter.stt')} </th>
              <th> {t('chapter.name')} </th>
              <th> {t('chapter.id')} </th>
              <th> {t('chapter.order')} </th>
              <th> {t('chapter.active')} </th>
              <th> {t('chapter.action')} </th>
              <th> {t('chapter.view')} </th>
            </tr>
          </thead>
          <tbody className={classes.tableContainer}>
            {listChapter.content.map((chapter, index) => (
              <ChapterItem key={chapter.id} chapter={chapter} index={index} />
            ))}
          </tbody>
        </table>
      </>
    )
  }

  const renderModalAddChapter = () => {
    return (
      <VModal
        visible={modalAddChapter}
        title={t('chapter.add')}
        handleCancel={() => setModalAddChapter(false)}
        handleOk={handleSubmitAddChapter}
        content={<ModalAddChapter handleChangeName={handleChangeName} />}
      />
    )
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        title={classDetail.name.concat(' - ').concat(subjectDetail.name)}
        Icon={ArrowLeftOutlined}
        iconRight={true}
        handleClickIconLeft={handleGoBack}
        handleClickIconRight={handleAddChapter}
      />
      {modalAddChapter ? renderModalAddChapter() : <></>}
      {renderListSubject()}
      {listChapter.totalRecords > 0 ? (
        <Pagination
          onChange={handleChangePage}
          current={page}
          pageSize={limit}
          total={listChapter.totalRecords}
          style={styles.pagination}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

const styles = {
  pagination: { textAlign: 'center' as const, marginTop: 16 }
}

export default SubjectDetail
