export default {
  // 查看商品详情
  getCommodityDetails: {
    data: {
      cid: "@increment",
      name: "@ctitle(4)",
      birthday: "@datetime",
      price: "@integer(10,500)",
      ownerId: "@increment",
      ownerName: "@cname",
      "pictureList|2-5": [
        {
          "order|+1": 0,
          pid: "@increment",
          url: "@dataImage"
        }
      ],
      description: "@cparagraph"
    },
    code: 0,
    message: "数据加载完毕！"
  },
  // 查看某人的商品记录
  getCommodityListByUser: {
    "data|22": [
      {
        cid: "@increment",
        name: "@ctitle(4)",
        birthday: "@datetime",
        price: "@integer(10,500)",
        ownerId: "@increment",
        ownerName: "@cname",
        firstPicture: {
          pid: "@increment",
          url: "@dataImage"
        },
        description: "@cparagraph"
      }
    ],
    code: 0,
    message: "数据加载完毕！"
  },
  // 首页，最热
  getMostPopularCommodityList: {
    "data|4": [
      {
        cid: "@increment",
        name: "@ctitle(4)",
        price: "@integer(10,500)",
        birthday: "@datetime",
        firstPicture: {
          pid: "@increment",
          url: "@dataImage"
        }
      }
    ],
    code: 0,
    message: "数据加载完毕！"
  },
  // 首页，最新
  getLatestCommodityList: {
    "data|4": [
      {
        cid: "@increment",
        name: "@ctitle(4)",
        price: "@integer(10,500)",
        birthday: "@datetime",
        firstPicture: {
          pid: "@increment",
          url: "@dataImage"
        }
      }
    ],
    code: 0,
    message: "数据加载完毕！"
  }
};
