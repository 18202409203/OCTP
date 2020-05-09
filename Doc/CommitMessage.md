# Commit Message规范

## 一、风格&规范
### 1. commitizen风格（Angular）[详情](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

> 分成三大模块：Header/Body/Footer

#### Header

```
type(scope):subject(issue)
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
# 项目安装/全局安装 - 对应package.config.path
npm install cz-conventional-changelog -D
```

`package.json` 添加配置
```json
"config": {
    "commitizen": {
        "path": "./node_modules/cz-conventional-changelog" // 项目
        // "path": "cz-conventional-changelog" // 全局
    }
}
```

然后可以使用`git cz`代替`git commit`，就会出现交互界面

```
D:\Code\IVABOX\src\WFE>git cz
cz-cli@4.1.2, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
  
# 所有序列
? Select the type of change that you're committing: chore
? What is the scope of this change (e.g. component or file name): WFE
? Write a short, imperative tense description of the change (max 57 chars):
 (23) 添加 commitlint config 文件
? Provide a longer description of the change:
? Are there any breaking changes? No
? Does this change affect any open issues? No
```

`package.json`中添加新的`npm scripts`

```json
"scripts": {
    "commit": "git cz"
}
```

可以使用`npm run  commit`提交了

## 四、提交检测commilint & git-hooks [详情](https://github.com/typicode/husky)

安装依赖

```
# commitlint
npm install --save-dev @commitlint/config-conventional @commitlint/cli
# husky
npm install husky --save-dev
```

`package.json`配置`husky`
```json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
```

添加`commitlint.config.js`；这里用默认，亦可自定义


```js
module.exports = {extends: ['@commitlint/config-conventional']}
```

> 详细配置参见[config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

现在每次提交，无论是`git commit`/`git cz`/`npm run commit`，都会触发钩子，验证message格式是否符合`type(scope?):subject`模式

```bash
# 正确
husky > commit-msg (node v12.16.1)
[dev b195bbb] chore(config): 添加 commitlint config 文件
 1 file changed, 1 insertion(+)
 
# 错误
$ git commit -m"haha"
husky > commit-msg (node v12.16.1)
⧗   input: haha
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]
✖   found 2 problems, 0 warnings
husky > commit-msg hook failed (add --no-verify to bypass)
```

## 五、变更日志Change Log & Release Note

安装依赖

```
npm install -S conventional-changelog-cli
```

新建`CHANGELOG.md`文件；`package.json`中添加新的`npm scripts`

```
"genlog": "conventional-changelog -p angular -i CHANGELOG.md -s"
```

执行`npm run genlog`就会生成所有包含`feat`/`fix`/`perf`和`Breaking Changes`的变更日志

> # HBuilder X - Release Notes
> ======================================
> ## 2.6.16.20200424
> * 【uni-app插件】
>   + App平台、H5平台 修复 部分组件文本前后出现多余空格或换行的Bug [详情](https://ask.dcloud.net.cn/question/94802)
>   + App平台 修复 v3版本 text 组件首尾换行表现与旧版不一致的Bug
>   + H5平台 修复 uni.chooseImage 返回的 tempFilePaths 为空Bug [详情](https://ask.dcloud.net.cn/question/94805)
>   + 小程序平台 修复 使用小程序组件时部分事件返回信息不正确的Bug
> 
> ## 2.6.15.20200421
> * 新增 【重要】内置浏览器运行时，将日志直接输出到HBuilderX控制台
> * 新增 内置web服务器 支持自定义端口 （菜单【设置】【运行配置】）
> * 新增 FTP插件 支持通过commands在【自定义快捷键】中配置快捷键 [详情](https://ask.dcloud.net.cn/article/37081)
> * 修复 因eslint新版插件导致validate-html、validate-stylelint插件失效的Bug
> * 修复 Json文件语法校验 修正错误后，红色波浪线无法消失的Bug [详情](https://ask.dcloud.net.cn/question/94249)
> * 修复 内部资源管理器 当未安装终端插件时，运行外部命令导致编辑器闪退的Bug
> * 修复 Sublime Text 快捷键配置文件语法错误的Bug [详情](https://ask.dcloud.net.cn/question/94359)
> * 新增 uni-app 支持自定义uniapp编译器node启动内存（菜单【设置】【运行配置】）

## 参考
* [commitizen简介 - 阮一峰](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
* [如何写好 Git commit log? - 王岳东的回答 - 知乎](https://www.zhihu.com/question/21209619/answer/32312105)
* [commitizen使用介绍 - 博客园](https://www.cnblogs.com/mengfangui/p/12634845.html)
* [commitizen - github](https://github.com/commitizen/cz-cli) - REPL工具
* [husky - github](https://github.com/typicode/husky) - git钩子
* [ghooks - npm](https://www.npmjs.com/package/ghooks) - 最新更新|两年前
* [validate-commit-msg - github](https://github.com/conventional-changelog-archived-repos/validate-commit-msg) - 最新更新|三年前|DEPRECATED
* [commitlint - github](https://github.com/conventional-changelog/commitlint)