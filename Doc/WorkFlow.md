# GIT命令&流程

## 约定
> * 我们采用master做主分支，dev分支做开发分支
> * 每个人从dev上拉取代码，建立自己的开发分支，开发完毕再提交回dev分支
> * master只用来同步dev上的稳定代码，不可以向master分支提交代码

## 概念
* 工作目录`Work Directory`
	* 对应`git clone`
* 暂存区`Stage`
	* 对应`git add`
* 本地仓库`Local Repository`
	* 对应`git commit`
* 远程仓库`Remote Repository`
	* 对应`git push`
* 合并请求`Pull Request`
	* 对应`git merge`
* 分支`branch`
	* 对应`git branch` `git checkout`
* 议题`issue`
	* 用来讨论功能`feature`或者BUG

## 开发流程

### 1. 克隆`dev`分支项目到本地
```bash
git clone git@github.com:18202409203/OCTP.git
```

### 2. 新建自己的开发分支`zpj-dev`
```bash
git branch zpj-dev # 建立
git checkout zpj-dev # 切换
git push -u origin zpj-dev # 首次建分支推送一次，让远程知道你在开发该分支
```

### 3. 开发
```bash
git diff # 查看改动
git log # 查看提交记录
git branch --all # 查看所有分支
git branch -D branch-name # 删除本地分支
git remote update origin --prune # 更新远程分支列表
git reset --hard version-number # 放弃所有本地改动，重置到指定版本version-number
git reset --soft version-number # 放弃指定版本version-number之后的所有提交，将改动重置到暂存区
git reset version-number # 放弃指定版本version-number之后的所有提交和添加，将改动重置到工作目录
```

### 4. 提交&推送
```bash
git status # 查看文件修改状态
git add code-file.js # 添加文件到暂存区
git commit -m"comment message" # 提交暂存区的所有文件到本地仓库
git push # 推送本地仓库改动到远程
```

### 5. 合并请求
* 创建一个`PR`，等待管理员审核