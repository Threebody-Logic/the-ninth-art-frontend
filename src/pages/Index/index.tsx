import React from 'react';
import './index.less';
import { PageContainer } from "@ant-design/pro-components";

const IndexPage: React.FC = () => {
  return (
    <PageContainer>
      <div className={"index"}>
        这是主页
      </div>
    </PageContainer>
  );
}

export default IndexPage;