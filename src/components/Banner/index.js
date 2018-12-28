import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import { Carousel,  WingBlank } from 'antd-mobile';
import './index.scss';
class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'ban1',
          'ban2',
          'ban3'
        ]
      })
    }, 100)
  }
  render() {
    return <WingBlank>
        <Carousel autoplay={true} infinite={true}>
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight
              }}
            >
              <img
                src={`http://10.36.140.120:3000/images/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto' })
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
  }
}


export default Banner;

