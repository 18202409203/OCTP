# Commit Message规范

## 一、风格&规范
### 1. commitizen风格（Angular）[详情](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

> 分成三大模块：Header/Body/Footer

#### Header

```
type(scope):subject
```

- `feat` 新增功能
- `fix` 修复/修改
- `docs` 文档修改
- `refactor` 重构，代码结构变动，不变功能
- `build` 构建相关
- `style` 样式，无关逻辑
- `perf` 优化性能
- `chore` 非src/test的琐碎工作
- `test` 测试文件
- `ci` CI/CD文件
- `revert` 撤销

#### Body
* 详细描述

#### Footer
* 不兼容（Breaking）的变动（Change）
* 关闭议题

### 2. 其他不错的风格 [详情](https://www.zhihu.com/question/21209619/answer/32312105)
```
[MOD] 1. 修改 XXX
[ADD] 2. 添加 XXX
[BUG] 3. 修复 XXX的 bug
[DEL] 4. 删除 XXX
```

## 二、总结&建议
* 提交时不用`git commit -m`，而使用`git commit -v` 进入vim编辑器模式，进行详细地编辑；该模式会提供本次提交的所有改动供参考
* 提交信息按照`type(scope): subject`模式填写，`body`和`footer`可省略不写
* `type`的类型主要包括：feat、fix、docs、style、test等，其他根据项目酌情自定义
* `scope`是代码改动的影响范围，可以不写，也可以写代码变动的最大目录，例如WBE
* `subject`是简短的功能描述，('50/72'原则)；采用动词开头`add`、`fix`，而不是`added`、`fixed`
* 我们项目中建议使用中文，词语示例：`新增`、`修复`、`优化`、`调整`
* 建议关键动词和名词之间留一个空格，示例： `新增 可以全屏浏览`
* 结束时不加句号`.`或`。`

示例：
```
feat(WFE/src/views): 新增 按图查询页面
fix(WFE/src/router): 修改 首页的路由
test(WFE): 增加 按图查询页面的单元测试
```

## 三、REPL辅助工具 [详情](https://github.com/commitizen/cz-cli)
`commitizen`提供了一个交互式的工具，帮助规范`message`
```
# 全局安装
npm install -g commitizen
# 项目目录下
commitizen init cz-conventional-changelog --save --save-exact
```

然后可以使用`git cz`代替`git commit`，就会出现交互界面

```
D:\Code\IVABOX\src\WFE>git cz
cz-cli@4.1.2, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
```

## 参考
* [阮一峰](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
* [如何写好 Git commit log? - 王岳东的回答 - 知乎](https://www.zhihu.com/question/21209619/answer/32312105)
* [commitizen](https://github.com/commitizen/cz-cli) - REPL工具
* [husky](https://github.com/typicode/husky) - git钩子
* [ghooks](https://www.npmjs.com/package/ghooks) - 最新更新|两年前
* [validate-commit-msg](https://github.com/conventional-changelog-archived-repos/validate-commit-msg) - 最新更新|三年前