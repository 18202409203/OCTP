import types from "./types";

export default {
  [types.setLoginInfo](state, newLoginInfo) {
    state.userInfo = newLoginInfo.userInfo;
    localStorage.setItem(`userInfo`, JSON.stringify(newLoginInfo.userInfo));
    state.token = newLoginInfo.token;
    localStorage.setItem(`token`, newLoginInfo.token);
  }
};
