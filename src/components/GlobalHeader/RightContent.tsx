import type { Settings as ProSettings } from '@ant-design/pro-layout';
import React from 'react';
import AvatarDropdown from './AvatarDropdown';
import './index.less'

type GlobalHeaderRightProps = Partial<ProSettings>;

/**
 * 全局菜单右侧
 * @constructor
 */
const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = () => {
  return (
    <div style={{marginRight: 10}}>
      <AvatarDropdown />
    </div>
  );
};

export default GlobalHeaderRight;
