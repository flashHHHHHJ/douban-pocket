# 从零开始口袋豆瓣

- 拥有强大字符串处理的正则表达式
- 拉取后台数据的 `Ajax`
- 设计模式
- 框架 `React`

## 1. 具体功能介绍
### 1.1 列表展示
共有三种不同类型的列表（图示-电影-音乐），每一个列表需要展示至少一页的内容。

### 1.2 底部导航
底部常驻导航栏，点击可切换不同类型，控制列表展示相应的内容。

### 1.3 顶部搜索
顶部搜索框，输入内容点击搜索后，会在当前类别进行搜索出相关内容

### 1.4 内容详情
点击列表中的每一项可以进入内容详情，点击左上角可返回


## 2. 通过JSONP 拉取豆瓣数据
使用豆瓣 API 接口，涉及到跨域问题，可通过 `JSONP` 方式解决。
- [fetch-jsonp](https://github.com/camsong/fetch-jsonp)


### 豆瓣接口说明
豆瓣开发者网站有许多接口的说明文档，大家需要根据看豆瓣文档中接口的数据格式说明来进行开发页面。本应用涉及的接口文档如下：

### 图书相关
- 拉取图书列表和搜索图书列表可使用下面的接口:

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/book.md

### 音乐相关
- 拉取音乐列表和搜索音乐列表可使用下面的接口:

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/music.md

### 电影相关
由于拉取电影列表接口有点特殊，涉及接口需要有两条：
- 【拉取电影 top 250 列表】

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/movie_top.md
- 【搜索电影】

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/movie.md