import React from 'react';

import 'antd-mobile/dist/antd-mobile.css';
import './index.scss';
import { Tabs } from 'antd-mobile';
import Nowplay from '../../../../components/Nowplay';
import Soonplay from '../../../../components/Soonplay';

const tabs = [
  { title: '正在上映' },
  { title: '即将上映' },
]

const TabExample = () => (
  <div>
    <Tabs tabs={tabs} initalPage={'t2'}>
      <div>
        <Nowplay />
        <Nowplay />
        <Nowplay />
        <Nowplay />
        <Nowplay />
        <Nowplay />
        <Nowplay />
        <Nowplay />
      </div>
      <div>
        <Soonplay />
      </div>
    </Tabs>
  </div>
)

      export default TabExample;
