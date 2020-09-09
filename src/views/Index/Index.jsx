import React from 'react'
import {withRouter} from 'react-router-dom';
import './index.less';
import LqHeader from './Component/LqHeader';
import LqDesignCtx from './Component/LqDesignCtx';
const Index = (props) => {
  return (
    <div className='form-design'>
      <LqHeader></LqHeader>
      <LqDesignCtx ></LqDesignCtx>
    </div>
  )
};
export default withRouter(Index)
