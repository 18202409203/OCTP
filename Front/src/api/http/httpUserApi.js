import http from "./http";
import { userApi } from "../apiList";

// 登录
export async function Http_login(authInfo) {
  userApi.login.data.userName = authInfo.userName;
  userApi.login.data.passWord = authInfo.passWord;
  try {
    return await http(userApi.login);
  } catch (error) {
    return error;
  }
}

// 查看用户信息
export async function Http_getProfileByUser(uid) {
  userApi.getProfileByUser.data.userId = uid;
  try {
    return await http(userApi.getProfileByUser);
  } catch (error) {
    return error;
  }
}

// 修改个人信息
export async function Http_modifyProfile() {
  try {
    return await http(userApi.modifyProfile);
  } catch (error) {
    return error;
  }
}
