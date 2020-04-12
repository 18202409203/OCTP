import http from "./http";
import apiList from "../apiList";

export function getCommodityDetailsApi(cid) {
  return http({
    method: apiList.getCommodityDetailsApi.method,
    url: apiList.getCommodityDetailsApi.url,
    params: {
      commodityId: cid
    }
  });
}

export function getCommodityListApi() {
  return http({
    method: apiList.getCommodityListApi.method,
    url: apiList.getCommodityListApi.url
  });
}
