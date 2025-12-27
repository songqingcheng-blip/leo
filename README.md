# 人体经脉学习网页 - 使用说明

## 📸 添加专业经脉图片

为了获得最佳学习效果，建议下载专业的人体经脉图并保存到项目文件夹中。

### 推荐图片来源:

1. **知乎 - 经络和穴位高清图**
   - 链接: https://zhuanlan.zhihu.com/p/98347402
   - 包含完整的经络穴位动图

2. **中医锦囊 - 十四经脉高清图**
   - 链接: http://www.zhongyijinnang.com/?p=15748
   - 十四经脉动图,所有穴位都有标注

3. **39健康网 - 十二经络走向图**
   - 链接: https://m-mip.39.net/askar/mipso_10776110.html
   - 清晰的经络走向高清图

### 使用步骤:

1. 从上述网站下载一张专业的人体经脉图
2. 将图片重命名为 `meridian.jpg` 或 `meridian.png`
3. 将图片保存到当前文件夹 (与index.html同目录)
4. 打开 `index.html` 文件,找到第21行
5. 修改图片路径为: `src="meridian.jpg"` 或 `src="meridian.png"`

### 示例:

```html
<img src="meridian.jpg"
     alt="人体十二经脉图"
     class="meridian-main-image"
     style="display: block;">
```

### 当前备用方案:

如果不添加专业图片,页面会自动显示本地的SVG示意图 `meridian-chart.svg`

## 📚 其他参考资源:

- [人体十二经络图 - 中国生命关怀协会](http://www.cnaflc.org/jkcs/1852.jhtml)
- [十二经脉图 - 百度百科](https://m.baidu.com/bh/m/detail/ar_268177095568467478)
- [CSDN - 十四经脉最全总结](https://blog.csdn.net/qq_42864343/article/details/136509881)
