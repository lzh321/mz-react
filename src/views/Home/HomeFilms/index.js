import React, { Component } from 'react';
import Banner from '../../../components/Banner';
import FilmsTabs from './FilmsTabs'
import './index.scss';
class Films extends Component {
  render(){
    return <div className="homefilms">
        <Banner />
        <FilmsTabs />
      </div>
  }
}

export default Films;