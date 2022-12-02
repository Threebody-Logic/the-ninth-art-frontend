import React from 'react';
import { Badge, Button, Descriptions } from "antd";
import SlideShow from "@/components/SlideShow";
import Tags from "@/components/Tags";
import './index.less'
import { Link } from "umi";

const App= (props: any) => {
  const { name, type, platform, images, developer, tags, publisher, description, introduction, saleStatus } = props.game;

  let Status = () => {
    switch (saleStatus) {
      case '待发售': return <Badge status="warning" text= {saleStatus} />;
      case '热卖中': return <Badge status="processing" text= {saleStatus} />;
      case '已下架': return <Badge status="error" text= {saleStatus} />;
      default: return <Badge status="default" text= {"未知"} />
    }
  }

  return (
    <div>
      <Link to="/game">
        <Button type="text" style={{marginBottom: 16}}> 返回 </Button>
      </Link>

      <Descriptions title="游戏详情" layout="vertical" bordered>
        <Descriptions.Item label="游戏截图" span={1}>
          <div style={{margin: '0 auto', maxWidth: 720}}>
            <SlideShow images={images}/>
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="游戏描述" span={2}>
          {description}
        </Descriptions.Item>
        <Descriptions.Item label="游戏名称">{name}</Descriptions.Item>
        <Descriptions.Item label="游戏类型">{type}</Descriptions.Item>
        <Descriptions.Item label="发售平台">
          <Tags keywords={platform} color={"blue"}/>
        </Descriptions.Item>
        <Descriptions.Item label="标签" span={3}>
          <Tags keywords={tags} color={"#2db7f5"}/>
        </Descriptions.Item>
        <Descriptions.Item label="发售状态">
          <Status />
        </Descriptions.Item>
        <Descriptions.Item label="制作方">
          {developer}
        </Descriptions.Item>
        <Descriptions.Item label="发行方">
          {publisher}
        </Descriptions.Item>
        <Descriptions.Item label="详细介绍">
          {introduction}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
};

export default App;