# 前后端接口规范

## 前言

> * 后端规范注释
> * 使用apidoc/swagger等文档生成器生成API文档

## 风格

* 采用RESTful风格
* 只采用`GET`和`POST`方法
* POST方法**增删改**以语义化的命名为准，具体地示例如下：

不使用
```js
{
	Method: Delete|Update|Put,
	path: /api/user
}
```

而使用
```js
{
	Method: Post,
	path: /api/user/insert, // 新增
	path: /api/user/remove, // 删除
	path: /api/user/update, // 修改
	path: /api/user/fetch // 查找
}
```

## 格式
* Http状态码保证网络层面的连通
```js
// 一个response对象
{
	status: 200/304/404/500, // 对应http状态
	data: [dataObject] // 前后端约定的数据对象
}
```

* 自定义状态码建立在200的基础上
```js
// 一个dataObject对象
{
	code: 0/1, // 自定义状态码：0表示成功；1表示错误
	data: anything, // 真正返回的数据
	message: "提示信息！" // 意义明确的提示信息，用于前端提示
}
```

* 一个完整的成功Response示例如下：
```js
{
	status: 200,
	data: {
		code: 0,
		message: "保存成功！",
		data: [1, 2, 3, 4]
	}
}
```

## 接口明细

#### 权限(注册&登录)

> /api/auth

| 方法 | 接口 | 含义 | 参数 | 响应 |
| - | - | -| - | - |
| POST | /api/auth/register | 注册 | {name: 'zpj', pwd: '123', number: '001'} | 跳转登录 |
| POST | /api/auth/login | 登录 | {name: 'zpj', pwd: '123'} | 鉴权信息 |
| POST | /api/auth/logout | 退出，下线 | 鉴权信息 | 清空cookie |
| POST | /api/auth/disappear | 注销账户 | 鉴权信息 | - |

#### 商品

> /api/commodity

| 方法 | 接口 | 含义 | 参数 | 响应 |
| - | - | -| - | - |
| POST | /api/commodity/fetch | 获取商品列表 | 鉴权信息 | [1, 2, 3] |
| POST | /api/commodity/insert | 新建商品 | {name: '娃娃'} | 新建成功！ |
| POST | /api/commodity/remove | 删除（下架）商品 | {id: '0000001'} | 删除成功！ |
| POST | /api/commodity/update | 更新商品 | {name: '抱枕'} | 修改成功！ |


#### 用户

> /api/user

| 方法 | 接口 | 含义 | 参数 | 响应 |
| - | - | -| - | - |
| POST | /api/user/profile | 个人信息类 | 鉴权信息 | {name: 'zpj'} |
| POST | /api/user/goods | 个人商品 | 鉴权信息 | 四种商品 |
| POST | /api/user/message | 消息 | 鉴权信息 | 交易通知等 |
| POST | /api/user/remove | 删除（下架）商品 | {id: '0000001'} | 删除成功！ |
| POST | /api/user/update | 更新商品 | {name: '抱枕'} | 修改成功！ |

#### 交易

> /api/transaction

| 方法 | 接口 | 含义 | 参数 | 响应 |
| - | - | -| - | - |
| POST | /api/transaction/query | 查询个人所有交易 | 鉴权信息 | {...} |
| POST | /api/transaction/confirm | 新增交易记录 | 鉴权信息 | {...} |

