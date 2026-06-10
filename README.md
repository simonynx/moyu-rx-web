# 今天玩什么 H5

这是一个纯静态网页项目，用于店内二维码扫码打开。

## 文件

- `index.html`：页面结构
- `styles.css`：视觉样式
- `app.js`：场景推荐、人数推荐、桌游教程和设备教程切换
- `site-config.js`：后端 API、OSS 图片前缀等配置
- `assets/store-hall.png`：大厅照片素材

## 修改推荐内容

当前“今日小说 / 今日桌游 / 今日主机 / 几个人怎么玩 / 桌游教程”等文案在 `app.js` 顶部：

- `peoplePlans`
- `recommendations`
- `moods`
- `devices`
- `boardGames`

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
/rx/?mood=quiet
/rx/?mood=friends
/rx/?device=ps5
```

可用 `mood`：

- `quiet`：安静回血
- `laugh`：想笑一下
- `easy`：不想动脑
- `friends`：朋友小聚
- `mystery`：推理一下
- `release`：发泄一下
- `birthday`：生日小局

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
