import games from "@/constants/games";
import GameTable from "@/components/GameTable";
import React, { useState } from "react";
import GameLeft from "@/components/GameLeft";
import { Pagination } from "antd";


const App: React.FC = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  let currentGames = games.slice((currentPage - 1) * 8, currentPage * 8);
  return (
    <div style={{display: 'inline', margin: '0 auto'}}>
      <GameLeft />
      <div style={{marginBottom: 16}}></div>
      <GameTable games={currentGames}/>
      <div style={{display: "flex"}}>
        <Pagination
          total={games.length}
          showQuickJumper
          pageSize={8}
          showTotal={(total) => `Total ${total} items`}
          style={{margin: '0 auto', alignItems: "center"}}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}

export default App;