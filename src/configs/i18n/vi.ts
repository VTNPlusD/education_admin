const vi = {
  common: {
    lang: 'Ngôn ngữ'
  },
  loginScreen: {
    username: 'Tên đăng nhập',
    pass: 'Mật khẩu',
    remember: 'Ghi nhớ đăng nhập',
    loginBtn: 'Đăng nhập',
    register: 'Đăng kí',
    termsOfUse: 'Tôi đã đọc điều khoản sử dụng',
    phoneNumber: 'Số điện thoại',
    birthday: 'Ngày sinh'
  },

  validation: {
    loginForm: {
      notEmptyUser: 'Vui lòng nhập tên đăng nhập',
      notEmptyPass: 'Vui lòng nhập mật khẩu',
      incorrect: 'Tên đăng nhập hoặc mật khẩu không đúng',
      phone: 'Vui lòng nhập số điện thoại',
      time: 'Vui lòng chọn ngày sinh'
    }
  },

  notification: {
    error: 'Lỗi',
    success: 'Thành công',
    messages: {
      invalidRole: 'Bạn không có quyền truy cập vào hệ thống'
    }
  },

  sideBar: {
    dashboard: {
      txtDashboard: 'Thống kê'
    },
    usersManagement: {
      txtUsersManagement: 'Quản lý người dùng',
      btnDelete: 'Xoá',
      btnUpdate: 'Cập nhật',
      btnBlock: 'Khoá',
      deleteUser: 'Xóa người dùng',
      deleteConfirm: 'Bạn có chắc chắn muốn xóa người dùng này không?',
      blockUser: 'Khóa người dùng',
      blockConfirm: 'Bạn có chắc chắn muốn khóa người dùng này không?',
      status: 'Trạng thái',
      changeStatus: 'Thay đổi trạng thái',
      confirmChangeStatus: 'Bạn có chắc chắn muốn cập nhật trạng thái này?'
    },
    classesManagement: {
      txtClassesManagement: 'Quản lý lớp'
    }
  },

  users: {
    user: 'Người dùng',
    username: 'Tên đăng nhập',
    fullname: 'Họ và tên',
    email: 'Email',
    phone: 'Số điện thoại',
    birthday: 'Ngày sinh',
    status: 'Trạng thái'
  },

  errors: {
    internet: 'Không có kết nối internet, vui lòng thử lại sau!',
    unauthenticated: 'Chưa xác thực',
    badRequest: 'Lỗi',
    wrong: 'Có lỗi xảy ra!'
  },

  header: {
    searchTxt: 'Nhập để tìm kiếm'
  },

  modal: {
    message: {
      success: 'Thành công',
      updateUserSuccess: 'Cập nhật người dùng thành công!'
    }
  }
}

export default vi
