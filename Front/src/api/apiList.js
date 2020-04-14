export default {
  // 查看商品详情
  getCommodityDetailsApi: {
    url: "/api/commodity/getByCommodityId",
    regUrl: /\/api\/commodity\/getByCommodityId/,
    method: "get"
  },
  // 查看某人的商品记录
  getCommodityListByUserApi: {
    url: "/api/commodity/getByUserId",
    regUrl: /\/api\/commodity\/getByUserId/,
    method: "get"
  },
  // 首页，最热
  getMostPopularCommodityListApi: {
    url: "/api/commodity/getMostPopular",
    regUrl: /\/api\/commodity\/getMostPopular/,
    method: "get"
  },
  // 首页，最新
  getLatestCommodityListApi: {
    url: "/api/commodity/getLatest",
    regUrl: /\/api\/commodity\/getLatest/,
    method: "get"
  }
};
