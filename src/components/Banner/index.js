import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "imgId":1,
          "img":require("./images/ban1.jpg")
        },
        {
          "imgId":2,
          "img": require("./images/ban2.jpg")
        },
        {
          "imgId":3,
          "img": require("./images/ban3.jpg")
        },
        {
          "imgId": 4,
          "img": require("./images/ban4.jpg")
        },
        {
          "imgId": 5,
          "img": require("./images/ban5.jpg")
        }
        ]
    }
  }

  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
        >
          {this.state.data.map((item) => (
            <img key={item.imgId} src={item.img} alt="" />
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}


export default Banner;

