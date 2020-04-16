import http from "./http";
import apiList from "../apiList";

// 查看商品详情
export async function getCommodityDetailsApi(cid) {
  try {
    return await http({
      method: apiList.getCommodityDetailsApi.method,
      url: apiList.getCommodityDetailsApi.url,
      params: {
        commodityId: cid
      }
    });
  } catch (error) {
    return {
      status: -1,
      message: error
    };
  }
}

// 查看某人的商品记录
export async function getCommodityListByUserApi(uid) {
  try {
    return await http({
      method: apiList.getCommodityListByUserApi.method,
      url: apiList.getCommodityListByUserApi.url,
      params: {
        userId: uid
      }
    });
  } catch (error) {
    return {
      status: -1,
      message: error
    };
  }
}

// 首页，最热
export async function getMostPopularCommodityListApi() {
  try {
    return await http({
      method: apiList.getMostPopularCommodityListApi.method,
      url: apiList.getMostPopularCommodityListApi.url
    });
  } catch (error) {
    return {
      status: -1,
      message: error
    };
  }
}

// 首页，最新
export async function getLatestCommodityListApi() {
  try {
    return await http({
      method: apiList.getLatestCommodityListApi.method,
      url: apiList.getLatestCommodityListApi.url
    });
  } catch (error) {
    return {
      status: -1,
      message: error
    };
  }
}
