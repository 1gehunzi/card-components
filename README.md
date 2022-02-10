## JSON 作为配置化的弊端

不能写注释。但是可以通过可视化编辑解决该问题

## 要解决的问题
1. 如何加载远端的代码?
2. 如何注册加载后的代码到框架中。
3. 父组件如何和远端引入的组件通信。
4. 远端代码如何复用框架中已引入的库。
5. 避免因远端代码被类似 v-for 多次调用导致的不必要请求。
1. 
 方案一：https://juejin.cn/post/6992483283187531789?share_token=cfcc4307-6c97-4f14-b84f-f268d1392e7b#heading-0

远程组件服务化
https://www.zhihu.com/question/265287975

https://juejin.cn/post/6992483283187531789 rollup

https://juejin.cn/post/6844903469921353735

[前端，何不尝试一下『插件化』开发](https://juejin.cn/post/6844904118591422472)


https://www.shouxicto.com/article/1408.html

rollup 打包vue
https://www.icodebang.com/article/272663


rollup 打包vue02
https://juejin.cn/post/6872616202993139720