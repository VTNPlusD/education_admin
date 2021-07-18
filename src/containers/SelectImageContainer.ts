import SelectImage from 'components/selectImage/SelectImage'
import { IUpload } from 'interfaces/interfaces/IUpload'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  DeleteImageAction,
  GetListUploadAction,
  UploadAction
} from 'redux/actions/common/commonAction'
import { commonSelector } from 'selectors/commonSelectors/commonSelector'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListUpload: () => dispatch(GetListUploadAction()),
  upload: (file: File, callback: (val: IUpload) => void) =>
    dispatch(UploadAction(file, callback)),
  deleteImage: (name: string) => dispatch(DeleteImageAction(name))
})

export default connect(commonSelector, mapDispatchToProps)(SelectImage)
