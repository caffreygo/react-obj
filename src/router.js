// src/router.js
import React from 'react'
// 引入路由组件
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Thunk from './pages/Thunk.js'
import store from './store/reducer' // 引入store

// 添加404页面
function NotFound() {
  return <div>404</div>
}

export default function () {
  return (
    <Provider store={store}>
      {/* 把store放入props中让所有子组件都能获取到  */}
      <BrowserRouter>
        {/* 开始使用路由 */}
        <div>
          <div>
            {/* 通过 Link 修改浏览器的url Switch组件 通过url 来判断展示那个Route 包裹的组件页面 */}
            <Link to="/">首页</Link>
          </div>
          <div>
            <Link to="/thunk">thunk页</Link>
            <br></br>
            <Link to="/page1">Page1</Link>
            <br></br>
            <Link to="/page2">page2</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route exact path="/thunk" component={Thunk} />
            {/* 路由找不到 加载404组件 */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
