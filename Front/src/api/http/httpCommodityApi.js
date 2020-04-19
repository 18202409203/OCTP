import http from "./http";
import { commodityApi } from "../apiList";

// 查看商品详情
export async function Http_getCommodityDetails(cid) {
  commodityApi.getCommodityDetails.data.commodityId = cid;
  try {
    return await http(commodityApi.getCommodityDetails);
  } catch (error) {
    return error;
  }
}

// 查看某人的商品记录
export async function Http_getCommodityListByUser(uid) {
  commodityApi.getCommodityListByUser.data.userId = uid;
  try {
    return await http(commodityApi.getCommodityListByUser);
  } catch (error) {
    return error;
  }
}

// 首页，最热
export async function Http_getMostPopularCommodityList() {
  try {
    return await http(commodityApi.getMostPopularCommodityList);
  } catch (error) {
    return error;
  }
}

// 首页，最新
export async function Http_getLatestCommodityList() {
  try {
    return await http(commodityApi.getLatestCommodityList);
  } catch (error) {
    return error;
  }
}
