import React, { Component } from 'react';
import Banner from '../../../components/Banner';
import FilmsTabs from './FilmsTabs'
import './index.scss';
import { Localtion } from './style';
class Films extends Component {
  render(){
    return (
      <div className="homefilms">
        <Localtion>
          <span>深圳市</span>
          <i className="iconfont icon-xialazhankai"></i>
        </Localtion>
        <Banner />
        <FilmsTabs />
      </div>
    )
  }
}

export default Films;