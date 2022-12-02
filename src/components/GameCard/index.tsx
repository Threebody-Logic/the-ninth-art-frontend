import { Button, Card } from "antd";
import React from 'react'
import Tags from '@/components/Tags'
import { history } from 'umi';

const { Meta } = Card;

export default function App(props: any) {
  const { id, name, platform, images,  developer } = props.game;
  return <Card
    hoverable
    style={{ width: 320, margin: "0 auto" }}
    cover={<img alt="empty" src={images[0]} />}
  >
    <Meta title={name} description={developer} />
    <div style={{marginTop: 10}}>
      <Tags className={"platforms"} keywords={platform} color={"#108ee9"}/>
    </div>
    <Button type="link" size={'small'} style={{marginTop: 10, fontSize: 14, float: 'right'}}
      onClick={() => {
        history.push(`/game/detail?id=${id}`)
      }}
    >
      Read More
    </Button>
  </Card>;
}