export const commodityApi = {
  // 查看商品详情
  getCommodityDetails: {
    url: "/api/commodity/getByCommodityId",
    method: "post",
    data: { commodityId: 0 }
  },
  // 查看某人的商品记录
  getCommodityListByUser: {
    url: "/api/commodity/getByUserId",
    method: "post",
    data: { userId: 0 }
  },
  // 首页，最热
  getMostPopularCommodityList: {
    url: "/api/commodity/getMostPopular",
    method: "get"
  },
  // 首页，最新
  getLatestCommodityList: {
    url: "/api/commodity/getLatest",
    method: "get"
  }
};

export const userApi = {
  // 登录
  login: {
    url: "/api/user/login",
    method: "post",
    data: {
      userName: "",
      passWord: ""
    }
  },
  // 得到用户信息
  getProfileByUser: {
    url: "/api/user/getByUserId",
    method: "post",
    data: {
      userId: 0
    }
  },
  // 修改个人信息
  modifyProfile: {
    url: "/api/user/Http_modifyProfile",
    method: "post",
    data: {
      userId: 0
    }
  }
};
