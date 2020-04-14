# 字段设计说明文档

## 前言

> * 数据库选型：MySQL

## 表头说明

| 型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| type | name | translation | description | comment | NOT NULL | UNIQUE |

## User-用户

| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| INT | uid | userID | AI | 主键 | true | true |
| VARCHAR45 | num | 学号number | 唯一身份认证，暂时只考虑校园 | - | true | true |
| VARCHAR45 | name | 昵称 | 可随意更改，不做重名校验 | - | true | - |
| VARCHAR45 | password | 密码 | 登录用 | - | true | - |
| DATETIME | birth | 注册日期 | 记录时间 | - | true | - |
| DATETIME | credit | 信用积分 | 初始满分100，只减不增 | - | true | - |
| VARCHAR45 | address | 住址 | 宿舍 | - | true | - |
| VARCHAR45 | phone | 电话 | 唯一必填的联系方式 | - | true | - |
| VARCHAR45 | mail | 邮箱 | - | - | true | - |
| VARCHAR45 | qq | QQ | - | - | - | - |
| VARCHAR45 | wechat | 微信 | - | - | - | - |
| VARCHAR200 | description | 备注信息 | 个性签名 | - | - | - |



## Commodity-商品
| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| INT | cid | commodityID | AI | 主键 | true | true |
| INT | owner | ownerID | 拥有者ID | 外键 | true | - |
| INT | winner | winnerID | 买断者ID | 外键 | true | - |
| VARCHAR45 | name | 商品名称 | 可重复 | - | true | - |
| VARCHAR45 | price | 商品价格 | 出售价 | - | true | - |
| DATETIME | birthday | 上架日期 | - | - | true | - |
| DATETIME | deathday | 下架日期 | - | - | true | - |
| VARCHAR45 | destination | 下架原因 | 0表示被买了，1表示不卖了 | - | true | - |
| VARCHAR200 | description | 详细规格描述 | 允许长段文字 | - | - | - |

## Picture-图库
| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| INT | pid | pictureID | AI | 主键 | true | true |
| INT | cid | commodityID | - | 外键 | true | - |
| BLOB | content | 图片内容 | Blob | - | true | - |
| INT | order | 图片顺序 | 0表示封面；其他1,2,3... | - | true | - |


## ~~User_Commodity-用户和心仪商品~~

> 这张表可以先不要，评论系统|竞价体系，都做为待选的提升方案

| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| 待定 | cid | 心仪商品ID | - | 主键 | true | true |
| 待定 | uid | 心仪者ID | - | 外键 | true | - |
| 待定 | uprice | 愿出价 | 愿意花多少钱入手该商品 | - | true | - |
