export default {
  getCommodityDetailsMock: {
    cid: "@guid",
    name: "@ctitle(4)",
    birthday: "@datetime",
    price: "@integer(10,500)",
    ownerId: "@guid",
    ownerName: "@cname",
    "pictureList|2-5": [
      {
        pid: "@guid",
        url: "@dataImage"
      }
    ],
    description: "@cparagraph"
  }
};
