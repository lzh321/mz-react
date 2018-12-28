import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Tabs from '../../../components/Tabs';
class Films extends Component {
  render(){
    return <div>
        <Switch>
          <Route component={Banner} />
        </Switch>
        <Route component={Tabs} />
        {/* <div className="">
          <ul>
            <li>正在热映</li>
            <li>即将上映</li>
          </ul>
        </div> */}
      </div>
  }
}

export default Films;