'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import './style.less'
class Index extends React.Component{
  render(){
    return <div className='hello'>index页面</div>
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'))