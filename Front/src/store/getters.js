export default {
  userInfo: state =>
    Object.keys(state.userInfo).length > 0
      ? state.userInfo
      : (state.userInfo = JSON.parse(localStorage.getItem("userInfo")) || {}),
  token: state =>
    state.token || (state.token = localStorage.getItem("token") || "")
};
