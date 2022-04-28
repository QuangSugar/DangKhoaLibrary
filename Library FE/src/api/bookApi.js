import axiosClient from "./axiosClient";

const bookApi = {
  //post user:object gồm taiKhoan, matKhau, email,...
  register: (user) => {
    const path = "/auth/register";
    return axiosClient.post(path, user);
  },

  //post user:object taiKhoan, matKhau => nhận về data có accessToken
  login: (user) => {
    const path = "/auth/login";
    return axiosClient.post(path, user);
  },

  getAccessToken: () => {
    const path = "/auth/refresh_token";
    return axiosClient.post(path,null);
  },
  updateInfo: (user) => {
    const path = "/user/update";
    return axiosClient.patch(path,user);
  },

  getBookLatest: () => {
    const path = `/book/get-latest-book`;
    return axiosClient.get(path);
  },

  getUserByCard: (credit) => {
    const path = `/user/show-credit?credit=${credit}`;
    return axiosClient.get(path);
  },

  postThemNguoiDung: (user) => {
    const path = "/QuanLyNguoiDung/ThemNguoiDung";

    return axiosClient.post(path, user);
  },

  deleteUser: (taiKhoan) => {
    const path = `/QuanLyNguoiDung/XoaNguoiDung/${taiKhoan}`;

    return axiosClient.delete(path);
  },

  editTaiKhoan: (user) => {
    const path = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return axiosClient.put(path, user);
  },

  getThongTinTaiKhoan: (info) => {
    const path = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(path, info);
  },
};

export default bookApi;
