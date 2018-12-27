import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Tabbar from '../../components/Tabber';
import Films from './HomeFilms';
import Cinemas from './HomeCinemas';
import Center from './HomeCenter';
class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      myTabs: [
        { key: 'films', name: '电影', icon:'icon-dianying', href:'/films'},
        { key: 'cinemas', name: '影院', icon: 'icon-yingyuan', href: '/cinemas' },
        { key: 'center', name: '我的', icon: 'icon-geren', href: '/center' }
      ]
    }
  }
  render(){
    return(
      <div>
        <Switch>
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas}></Route>
          <Route path="/center" component={Center}></Route>
          <Redirect to="/films"></Redirect>
        </Switch>
        <Tabbar tabs={this.state.myTabs}></Tabbar>
      </div>
    )
  }
}

export default Home;