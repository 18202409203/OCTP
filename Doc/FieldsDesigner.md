# 字段设计说明文档

## 前言

> * 数据库选型：Mongo | MySQL
> * 字段类型请确定数据库后进行确认

## 表头说明

类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一
- | - | - | - | - | - | -
type | name | translation | description | comment | required | unique

## User-用户

类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一
- | - | - | - | - | - | -
- | uid | userID | 自动生成？ | 主键 | true | true
- | num | 学号number | 唯一身份认证，暂时只考虑校园 | - | true | true
- | name | 昵称 | 可随意更改，不做重名校验 | - | true | -
- | password | 密码 | 登录用 | - | true | -
- | credit | 信用积分 | 初始满分100，只减不增 | - | true | -
- | address | 住址 | 宿舍 | - | true | -
- | phone | 电话 | 唯一必填的联系方式 | - | true | -
- | qq | QQ | - | - | - | -
- | wechat | 微信 | - | - | - | -
- | description | 备注信息 | 个性签名 | - | - | -



## Commodity-商品
类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一
- | - | - | - | - | - | -
- | cid | commodityID | 自动生成？ | 主键 | true | true
- | uid | userID | 拥有者ID | 外键 | true | -
- | destination | 最终去向 | 被下架/已售出，已售出就标记uid | - | true | -
- | name | 商品名称 | 可重复 | - | true | -
- | price | 商品价格 | 出售价 | - | true | -
- | image | 商品图片 | 考虑怎么存储，通常是多图 | - | - | -
- | video | 商品视频 | 考虑怎么存储，有这个需求 | - | - | -
- | description | 详细规格描述 | 允许长段文字 | - | - | -


## User_Commodity-用户和心仪商品
类型 | 字段 | 含义 | 说明 | 备注 | 必填 | 唯一
- | - | - | - | - | - | -
- | cid | 心仪商品ID | - | 主键 | true | true
- | uid | 心仪者ID | - | 外键 | true | -
- | uprice | 愿出价 | 愿意花多少钱入手该商品 | - | true | -