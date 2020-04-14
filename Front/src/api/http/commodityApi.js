import http from "./http";
import apiList from "../apiList";

// 查看商品详情
export function getCommodityDetailsApi(cid) {
  return http({
    method: apiList.getCommodityDetailsApi.method,
    url: apiList.getCommodityDetailsApi.url,
    params: {
      commodityId: cid
    }
  });
}

// 查看某人的商品记录
export function getCommodityListByUserApi(uid) {
  return http({
    method: apiList.getCommodityListByUserApi.method,
    url: apiList.getCommodityListByUserApi.url,
    params: {
      userId: uid
    }
  });
}

// 首页，最热
export function getMostPopularCommodityListApi() {
  return http({
    method: apiList.getMostPopularCommodityListApi.method,
    url: apiList.getMostPopularCommodityListApi.url
  });
}

// 首页，最新
export function getLatestCommodityListApi() {
  return http({
    method: apiList.getLatestCommodityListApi.method,
    url: apiList.getLatestCommodityListApi.url
  });
}
