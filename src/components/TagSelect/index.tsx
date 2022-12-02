import { Select, Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import React from 'react';

const options = [
  { value: 'Nintendo Switch' },
  { value: 'PlayStation' },
  { value: 'Xbox' },
  { value: 'PC' }];

const tagRender = (props: CustomTagProps) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={'blue'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 4 }}
    >
      {label}
    </Tag>
  );
};

const App: React.FC = () => (
  <div style={{width: '100%', display: 'inline-block'}}>
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      defaultValue={[]}
      style={{ display: 'inline'}}
      options={options}
    />
  </div>
);

export default App;