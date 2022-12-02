import { Tag } from 'antd';
import React from "react";

const App = (props: any) => {
  let list: JSX.Element[] = [];
  for (const listKey in props.keywords) {
    list.push(<Tag color={props.color}>{props.keywords[listKey]}</Tag>)
  }
  return <div>{list}</div>
}

export default App;