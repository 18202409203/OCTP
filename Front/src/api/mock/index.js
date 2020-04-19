const Mock = require("mockjs");
import { commodityApi, userApi } from "../apiList";

import commodityMock from "./mockCommodityApi";
import userMock from "./mockUserApi";

Mock.setup({
  timeout: 1000
});

let Random = Mock.Random;
Random.extend({
  phone: function() {
    const head = ["138", "182", "151", "152", "130", "186"];
    return this.pick(head) + Random.integer(10000000, 99999999);
  },
  studentNumber: function() {
    const head = ["2013", "2017", "2018", "2019", "2020"];
    return this.pick(head) + Random.integer(1000, 9999);
  },
  qq: function() {
    return Random.integer(100000, 9999999999);
  },
  mail: function() {
    const domain = ["qq.com", "163.com", "neu.edu.cn", "cambricon.cn"];
    return Random.email(this.pick(domain));
  }
});

// commodity
Object.getOwnPropertyNames(commodityApi).forEach(name => {
  mockApi(name, commodityApi, commodityMock);
});

// user
Object.getOwnPropertyNames(userApi).forEach(name => {
  mockApi(name, userApi, userMock);
});

function mockApi(name, api, mock) {
  let regUrl = new RegExp(api[name].url.replace(/\//g, "\\/"));
  Mock.mock(regUrl, api[name].method, mock[name]);
}
