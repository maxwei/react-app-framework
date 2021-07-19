'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import './style.less'
import logo from './assets/imgs/loading_icon.gif'
class Index extends React.Component{
  render(){
    return <div className='hello'>
      <div>index页面133</div>
      <img src={logo} alt="图片资源" />
    </div>
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'))