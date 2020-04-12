var Mock = require("mockjs");
import apiList from "../apiList";

import commodityMockList from "./commodityMock";

Mock.setup({
  timeout: 1000
});

// Mock APIs
Mock.mock(
  apiList.getCommodityDetailsApi.regUrl,
  apiList.getCommodityDetailsApi.method,
  commodityMockList.getCommodityDetailsMock
);
