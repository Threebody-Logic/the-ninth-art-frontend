import GameList from '@/components/GameList';
import { PageContainer } from '@ant-design/pro-components';
import React from "react";

const GamePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div>
        <GameList />
      </div>
    </PageContainer>
  );
};

export default GamePage;