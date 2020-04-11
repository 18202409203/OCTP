# 字段设计说明文档

## 前言

> * 数据库选型：MySQL
> * 字段类型请确定数据库后进行确认

## 表头说明

| 型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| type | name | translation | description | comment | required | unique |

## User-用户

| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| 待定 | uid | userID | 自动生成？ | 主键 | true | true |
| 待定 | num | 学号number | 唯一身份认证，暂时只考虑校园 | - | true | true |
| 待定 | name | 昵称 | 可随意更改，不做重名校验 | - | true | - |
| 待定 | password | 密码 | 登录用 | - | true | - |
| 待定 | credit | 信用积分 | 初始满分100，只减不增 | - | true | - |
| 待定 | address | 住址 | 宿舍 | - | true | - |
| 待定 | phone | 电话 | 唯一必填的联系方式 | - | true | - |
| 待定 | qq | QQ | - | - | - | - |
| 待定 | wechat | 微信 | - | - | - | - |
| 待定 | description | 备注信息 | 个性签名 | - | - | - |



## Commodity-商品
| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| 待定 | cid | commodityID | 自动生成？ | 主键 | true | true |
| 待定 | owner | ownerID | 拥有者ID | 外键 | true | - |
| 待定 | winner | winnerID | 买断者ID | 外键 | true | - |
| 待定 | name | 商品名称 | 可重复 | - | true | - |
| 待定 | price | 商品价格 | 出售价 | - | true | - |
| 待定 | image | 商品图片 | 考虑怎么存储，通常是多图 | - | - | - |
| 待定 | video | 商品视频 | 考虑怎么存储，有这个需求 | - | - | - |
| 待定 | description | 详细规格描述 | 允许长段文字 | - | - | - |


## User_Commodity-用户和心仪商品

> 这张表可以先不要，评论系统|竞价体系，都做为待选的提升方案

| 类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一 |
| - | - | - | - | - | - | - |
| 待定 | cid | 心仪商品ID | - | 主键 | true | true |
| 待定 | uid | 心仪者ID | - | 外键 | true | - |
| 待定 | uprice | 愿出价 | 愿意花多少钱入手该商品 | - | true | - |
