// Page2.tsx
import React from 'react'

// 使用ts设置 强类型
interface pageProps {
  num?: number
  text: string
}

function Test(props: pageProps) {
  return (
    <div>
      {props.text}
      {props.num}
    </div>
  )
}

export default function () {
  return <Test text="使用Ts。你好我是页面" num={2} />
}
