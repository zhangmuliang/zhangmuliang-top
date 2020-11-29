# 这是一个用来介绍我自己的网站

## 头部导航条的实现  

1.滚轮事件改变导航条显示状态，用window.addEventListener('wheel', (e) => {})来监听控制类名状态实现。 

2.由过渡效果transition-property: height, opacity；配合改变导航条的高度和透明度。

## 首页的实现  

1.顶部轮播图由antd走马灯组件实现。过程简单迅速。  

2.基本信息中按钮轮播图由state状态管理绝对定位的left值，当点击按钮时，利用定时器对left值进行逐步改变，形成滑动效果，当滑动到头或尾处时需跳转到对应图片。同时用moving标识变量来防止连续点击事件。  

3.教育经历同样由轮播图控制，用类名控制button大小，用由过渡效果transition-property和left属性控制当前展示卡片。  
