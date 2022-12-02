import React from 'react';
import { Carousel, Image } from 'antd';

const App = (props: any) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel autoplay afterChange={onChange}>
      {props.images.map((value: string, index: number) =>
        <div id={index.toString()} style={{display: 'flex', margin: '0 auto', alignItems: 'center', alignSelf:"center"}}>
          <Image src={value}/>
        </div>
      )}
    </Carousel>
  );
};

export default App;