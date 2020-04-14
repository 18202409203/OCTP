var Mock = require("mockjs");
import apiList from "../apiList";

import commodityMockList from "./commodityMock";

Mock.setup({
  timeout: 1000
});

// 查看商品详情
Mock.mock(
  apiList.getCommodityDetailsApi.regUrl,
  apiList.getCommodityDetailsApi.method,
  commodityMockList.getCommodityDetailsMock
);

// 查看某人的商品记录
Mock.mock(
  apiList.getCommodityListByUserApi.regUrl,
  apiList.getCommodityListByUserApi.method,
  commodityMockList.getCommodityListByUserMock
);

// 首页，最热
Mock.mock(
  apiList.getMostPopularCommodityListApi.regUrl,
  apiList.getMostPopularCommodityListApi.method,
  commodityMockList.getMostPopularCommodityListMock
);

// 首页，最新
Mock.mock(
  apiList.getLatestCommodityListApi.regUrl,
  apiList.getLatestCommodityListApi.method,
  commodityMockList.getLatestCommodityListMock
);
