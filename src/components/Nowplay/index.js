import React, { Component } from 'react';

import './index.scss';
import filmimg from '../../images/1.jpg'
class Nowplay extends Component {
  render(){
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          backgroundColor: '#fff'
        }}
      >
        <ul className="nowPlayingFilm">
          <li className="nowPlayingFilm-item">
            <div className="nowPlayingFilm-img">
              <img src={filmimg} alt="" />
            </div>
            <div className="nowPlayingFilm-info">
              <div className="nowPlayingFilm-name info-col">
                <span className="name">云南虫谷</span>
                <span className="item">2D</span>
              </div>
              <div
                className="nowPlayingFilm-grade info-col"
                style={{ visibility: 'hidden' }}
              >
                <span className="label">观众评分 </span>
                <span className="grade" />
              </div>
              <div className="nowPlayingFilm-actors info-col">
                <span className="label">
                  主演：非行 于恒 顾璇 蔡珩 马浴柯 马浴柯马浴柯马浴柯马浴柯
                </span>
              </div>
              <div className="nowPlayingFilm-detail info-col">
                <span className="label"> 中国大陆 | 100分钟</span>
              </div>
            </div>
            <div className="nowPlayingFilm-buy">购票</div>
          </li>
        </ul>
      </div>
    )
  }
}


export default Nowplay;