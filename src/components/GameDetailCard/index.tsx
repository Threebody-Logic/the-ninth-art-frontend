import React from "react";
import { Card } from "antd";
import GameDesc from "@/components/GameDesc";

const App = (props: any) => {
  return (
    <div style={{display: 'inline'}}>
      <Card>
          <GameDesc game={props.game}/>
      </Card>
    </div>);
}

export default App;