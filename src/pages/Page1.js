// 修改pages/Page1.js 测试 --当在其他组件中修改store的值后 每个组件对应的值都修改了
import React from "react";
import { connect } from 'react-redux'

function Home(props) {
  const { count } = props;
  return <div>我是页面1--{count}</div>;
}
// 获取store中的值
export default connect((state)=>({count: state.counter.count}))(Home);
