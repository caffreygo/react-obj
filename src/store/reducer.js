// 修改 store/reducer.js

import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { INFO } from "./actionsUser";// 获取约定类型

// 计数器
function counter(state = { count: 0 }, action) {
  switch (action?.type) {
    case "add":
      return { ...state,count: state.count + 1 };
    case "reduce":
      return { ...state,count: state.count - 1 };
    default:
      return state;
  }
}

// 异步修改
function reducer(state = { user:{} }, action) {
  switch (action?.type) {
      case INFO:
          return {
              ...state,
              user: action.payload,
          };
      default:
          return state;
  }
}

// 合并 reducer
function combineReducers(state = {}, action) {
  return {
      counter: counter(state.counter, action),
      reducer: reducer(state.user, action)
  }
}

// 创建store 对象
const store = createStore(combineReducers,applyMiddleware(thunkMiddleware));

// 导出要使用的Store
export default store
