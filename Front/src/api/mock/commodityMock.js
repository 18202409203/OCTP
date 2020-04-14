export default {
  // 查看商品详情
  getCommodityDetailsMock: {
    data: {
      cid: "@guid",
      name: "@ctitle(4)",
      birthday: "@datetime",
      price: "@integer(10,500)",
      ownerId: "@guid",
      ownerName: "@cname",
      "pictureList|2-5": [
        {
          "order|+1": 0,
          pid: "@guid",
          url: "@dataImage"
        }
      ],
      description: "@cparagraph"
    },
    status: 0,
    message: "数据加载完毕！"
  },
  // 查看某人的商品记录
  getCommodityListByUserMock: {
    "data|22": [
      {
        cid: "@guid",
        name: "@ctitle(4)",
        birthday: "@datetime",
        price: "@integer(10,500)",
        ownerId: "@guid",
        ownerName: "@cname",
        firstPicture: {
          pid: "@guid",
          url: "@dataImage"
        },
        description: "@cparagraph"
      }
    ],
    status: 0,
    message: "数据加载完毕！"
  },
  // 首页，最热
  getMostPopularCommodityListMock: {
    "data|4": [
      {
        cid: "@guid",
        name: "@ctitle(4)",
        price: "@integer(10,500)",
        firstPicture: {
          pid: "@guid",
          url: "@dataImage"
        }
      }
    ],
    status: 0,
    message: "数据加载完毕！"
  },
  // 首页，最新
  getLatestCommodityListMock: {
    "data|4": [
      {
        cid: "@guid",
        name: "@ctitle(4)",
        price: "@integer(10,500)",
        firstPicture: {
          pid: "@guid",
          url: "@dataImage"
        }
      }
    ],
    status: 0,
    message: "数据加载完毕！"
  }
};
