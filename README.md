## 微信小程序练习-动态显示内容和类名

#### 需求：点击选中某一水果，1. 展示水果名 ；2. 被点击的模块激活变色

#### 1. 搭建结构，设置样式

+ 定义好数据，用于渲染结构
+ 使用flex布局

js

```js
Page({
  data: {
    list:["苹果","西瓜","香蕉","龙眼","雪梨","榴莲","葡萄","香瓜","椰子"]
  }
})
```

wxml

```html
<view class="showCur">您当前选择的商品是：</view>
<view class="container">
<ul>
    <liwx:for="{{list}}" wx:key="*this"> {{item}} </li>
</ul>
</view>
```

==tips==:

+ 普通数据类型循环时，使用wx:key="*this"
+ 对象数组循环时，wx:key设置为唯一的属性即可，例如wx:key=id

wxss

```css
.showCur{
    margin: 10px auto;
    border: 1px solid #000;
    width: 80%;
    text-align: center;
    line-height: 50px;
}
.container{
    margin: auto;
    width: 90%;
    border: 1px solid rgb(10, 70, 236);
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items:center;
    height: 350px;
    background-color: #dae8fc;
}
li{
    width: 25%;
    background-color: #ffe6cc;
    border: 1px solid #e3b13d;
    text-align: center;
    line-height: 4;
}
```

#### 2. 增加点击事件

+ 增加点击事件
+ 传参
  + 通过data-xx 传值，传当前的 index
+ 修改data中的数据
  + 通过this.setData({ })，才能修改data中的值

wxml

```html
<li bindtap="handleTap" data-index="{{index}}" wx:for="{{list}}" wx:key="*this"> {{item}} </li>
```

js

```js
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
```

#### 3. 动态插入内容以及设置类名

+ 动态插入内容  ``{{list[selected]}}`` 
+ 动态设置类名  ``class="current{{selected==index?'active':''}}"`` 

```html
<view class="showCur">您当前选择的商品是：{{list[selected]}}</view>
<view class="container">
<ul>
    <li class="current{{selected==index?'active':''}}" bindtap="handleTap" data-index="{{index}}" wx:for="{{list}}" wx:key="*this"> {{item}} </li>
</ul>
</view>
```

