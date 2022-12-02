import TagSelect from "@/components/TagSelect";
import React from "react";
import { Card, Input } from "antd";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const App = () => {
  return (
    <div style={{display: 'inline', width: "100%"}}>
      <Card>
        <Search
          placeholder="搜索游戏"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <div style={{height: 16}}></div>
        <TagSelect />
      </Card>
    </div>
  );
}

export default App;