# 今天玩什么 H5

这是一个纯静态网页项目，用于店内二维码扫码打开。

## 文件

- `index.html`：页面结构
- `styles.css`：视觉样式
- `app.js`：人数推荐、桌游库和设备教程切换
- `site-config.js`：后端 API、OSS 图片前缀等配置
- `assets/store-hall.png`：大厅照片素材

## 修改推荐内容

当前“今日小说 / 今日桌游 / 今日主机 / 几个人怎么玩 / 桌游教程”等文案在 `app.js` 顶部：

- `boardgameFilters`
- `peoplePlans`
- `recommendations`
- `devices`
- `boardGames`

桌游库的筛选按钮在 `boardgameFilters`，内容卡片在 `boardGames`；后面新增桌游时，补一条数据并写好 `filters` 标签就会自动进对应筛选。

直接改文字后重新上传即可，不需要构建。

## 部署

把整个目录上传到 VPS 的静态站点目录即可，例如：

```text
/var/www/moyu-rx/
```

推荐访问路径：

```text
https://你的域名/rx/
```

## 后端图片

`site-config.js` 默认读取：

```text
https://api.moyuhuashui.top/api/v1/config/
```

并优先使用 `home_page_image0-3` 中第一张可用图片。接口读取失败或字段为空时，会使用本地 `assets/store-hall.png`。

如果换域名，只改：

```js
window.MOYU_RX_CONFIG = {
  apiBaseUrl: "https://api.moyuhuashui.top/api/v1",
  ossBaseUrl: "https://moyuhuashui.oss-cn-shenzhen.aliyuncs.com/"
};
```

## 二维码参数

页面支持用查询参数直接打开某个结果：

```text
/rx/?people=duo
/rx/?device=ps5
/rx/?boardgame=exploding-kittens
```

可用 `people`：

- `solo`
- `duo`
- `group`
- `party`

可用 `boardgame`：

- `splendor-duel`
- `azul-duel`
- `splendor`
- `carcassonne`
- `azul`
- `catan`
- `power-grid`
- `avalon`
- `exploding-kittens`
- `uno`

可用 `device`：

- `quick`
- `ps5`
- `switch`
- `tv`
