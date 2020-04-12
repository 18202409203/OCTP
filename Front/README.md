## `src/api/`
* `api/apiList.js`包含所有前后端接口
* `mock`和`http`都是基于`api`接口产生数据的，所有都在此目录下
* 由于Mockjs需要正则化的url，所以有了字段regUrl（详见[vue-cli 中使用 Mockjs 详解](https://segmentfault.com/a/1190000014844604)）