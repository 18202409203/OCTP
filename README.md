# 线下校园交易平台立项书

> OCTP: Offline Campus Trading Platform

## 前言`Prewface`
* 我尽量用一些生僻的`rare`，不常见的`unusual`英文，主要和别人的系统字段做区分`distinguish`，其次扩充`extend`我们的英语词汇量
* 技术栈的话，前端是`Vue.js`，后端我用过`Node.js+Express`，用`Python+Django`也行，数据库考虑`Mongo`或者`MySql`比较熟
* 这里建议`Vue+Python+MySql`
* 至于盈利：我们可以定一个小目标，比如说，日活用户`DAU`达到1000时，考虑开始收中介费
* 大的弊端：基于线下私人交易，所以无法确认交易是否真的被进行；如何鼓励交易和惩罚失信是需要思考的问题，信用积分制只是个参考
* 对概念中的术语`term`，请进行前后统一和修正

## 关键词`Key Words`

* 不考虑盈利`no-profit`
* 突出校园`campus`
* 私下交易`offline`

## 竞品分析`Competitiveness`

* 与现有线上产品进行过比较，做追随者`follower`，还是探索者`explorer`？

> 并未找到十分著名的相关产品，说明**该方向有很大市场前景**

* 和**微信公众号**，**小程序**等对比，优势在哪里？

> 这个待考虑，小程序也可以做，但是网页端的适用性`applicability`更强

## 概念`Concepts`

### 买家`purchaser`

> * 买家是初期推广的主力军，所有潜在客户的第一身份
> * 不需要登录，观看商品免费
> * 当看中商品时，需要注册，登记愿意出的价格
> * 同时留下联系方式，只有卖家可以查看
> * 联系方式其实可以考虑给一个权限，自己控制是否他人可见

### 卖家`merchant`

> * 一开始就要注册，注册成功方可添加商品
> * 信息私有化，商品的添加和删除
> * 卖家可以下架`remove`商品

### 商品`commodity`

> * 初期需要校内师弟帮忙初始化
> * 商品标注好出售价，愿意买的人可以砍价`battle`，将所有的出价列出来，卖家可以选择心仪的价格去联系出价者
> * 考虑商品图片怎么存储的问题
> * 商品的状态有三种：在售`selling`、下架`removed`和售出`sold out`
> * 由于是私下交易，所以商品的下架需要`owner`确认
> * 售出需要`owner`和最终的`purchaser`一起确认
> * 确认商品的最终去向，使之成为历史商品`history commodity`
> * 历史商品可以用于后续数据统计分析，走向可视化道路
> * 历史商品可以展示在买家的已买记录里，卖家的已卖记录里
> * 生命周期`lifecycle`的问题：被添加>在售>(自行下架|售出>下架)
> * **商品的最终归宿是下架，下架原因分两种：1.不卖了 2. 被买了**
> * 商品下架要有下架原因；售出要有评价系统
> * 评价系统做卖家的信用积分？
> * 如果**只记录“既成事实”，不考虑想买或想卖**的情况，应该会简单一些

* 商品`commodity`
	* UUID`id`
	* 名称`name`
	* 描述`description`
	* 图片`image`
	* 类别`category`
	* 价格`price`
		* 出手价格`merchant's Price`
		* 入手价格`purchaser's Price`
	* 拥有者`owner` 唯一
	* 心仪者`admirer` 列表
		* 心仪者的联系方式`contact information`
		* 心仪者的愿意出价`acceptable price`

### 商品类别`category`

> * 初期可以先不考虑商品类别的问题，便于分类，搜索，定位，做推荐
> * 推荐这一块涉及到AI算法，分类/聚类

### 用户`user`

> * 所有未登记的称之为游客`visitor`
> * 防止恶意注册，学号或者电话，要有唯一`unique`认证`authentication`方式
> * 注册用户包括买家`purchaser`、卖家`merchant`和管理员`administrator`
> * 允许多重角色`multiple role`：即一个用户既可以是卖家也可以是买家
> * 如果多重角色，是否真的需要区分卖家和买家？
> * 一个注册`registered`用户，他就是可以当买家，也可以卖家，不用去分角色了
> * 信用问题：积分制，满分100，违规行为扣分

* 用户`user`
	* 唯一ID `id`
	* 学号 `number`
	* QQ `qq`
	* 微信 `weChat`
	* 电话 `phone`
	* 住址 `address`
	* 角色 `role` ？

### 关联关系`relation`
* 用户对商品的关系
	* 用户想买的商品列表`want` - 一对多
	* 用户已买的商品列表`got` - 一对多
	* 用户想卖的商品列表`selling` - 一对多
	* 用户已卖的商品列表`sold` - 一对多
* 商品对用户的关系
	* 最初发布商品的用户`owner` - 一对一
	* 想买商品的用户列表`admirers` - 一对多
	* 最终买断商品的用户`final winner` - 一对一

### 交易`transaction`
* 交易可以和积分制度进行结合
* 因为真实交易过程在线下，平台无法监督干涉
* 无法确认一次交易是否真的被进行
* 成交`deal`需要买卖双方在系统中确认
* 交易一定是**两个人**的事情
* 交易生命周期：卖家发起>买家确认>交易被认可
* 卖家向您发起了交易确认请求
* 交易被认可之后，下架商品，更新卖家的已卖商品栏和买家已买

### 积分`credit`
* 防止恶意刷分，不做好评系统，只做差评系统
* 一次被买卖双方均认可的交易，双方都可以对对方做一次差评
* 这是在维护“一次不被双方满意的交易”，警示`warning`不愉快的交易是有代价的
* 区分卖家积分和买家积分？
* 一个人的详细信息里展示他的买卖积分？
* 怎么做到交易被双方都认可，引入交易生命周期

### 竞价`battle`
* 心仪者对于心仪商品的愿出价`acceptable price`