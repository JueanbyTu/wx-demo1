
Page({
  data: {
    list:["苹果","西瓜","香蕉","龙眼","雪梨","榴莲","葡萄","香瓜","椰子"],
    selected:-1
  },
  handleTap(e){
    this.setData({
      selected:e.target.dataset.index
    })
  }
})
