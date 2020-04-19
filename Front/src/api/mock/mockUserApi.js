export default {
  login: {
    code: 0,
    message: "登陆成功！",
    data: {
      token: "@guid",
      userInfo: {
        uid: "@increment",
        name: "@cname",
        avatar: "@dataImage"
      }
    }
  },
  getProfileByUser: {
    code: 0,
    message: "查询成功！",
    data: {
      uid: "@increment",
      name: "@cname",
      avatar: "@dataImage",
      num: "@studentNumber",
      birth: "@datetime",
      address: "@city",
      phone: "@phone",
      mail: "@mail",
      qq: "@qq",
      wechat: "@phone",
      description: "@cparagraph"
    }
  },
  modifyProfile: {
    code: 0,
    message: "修改成功！",
    data: {}
  }
};
