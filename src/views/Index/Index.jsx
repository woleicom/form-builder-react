import React from 'react'
import {withRouter} from 'react-router-dom';
import './index.less';
import {Input} from 'antd';
const prefix = 'lq';
const Index = (props) => {
  return (
    <div className='form-design'>
      <div className='lq-header'>
      </div>
      <div className='lq-design-ctx'>
        <div className="lq-side-left">
          <div className="cpt-group">
            <p className="group-title">字段</p>
            <ul className='cpt-list'>
              <li className='widget-label'><a><span>单行文本</span></a></li>
              <li className='widget-label'><a><span>多行文本</span></a></li>
            </ul>
          </div>
        </div>
        <div className="lq-side-center">
          <div className='widget-content-cor'>
            <ul className='widget-list'>
              <li className='widget-view widget-select'>
                <div className="lq-label">
                  <span className='label-title'>单行文本</span>
                  <span className='label-request'></span>
                </div>
                <div className="lq-desc">测试</div>
                <div className="lq-widget">
                  <Input type="text"/>
                </div>
                <div className="lq-widget-cover">
                  <i className='btn-delete'></i>
                  <i className='btn-copy'></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lq-side-right"></div>
      </div>
    </div>
  )
};
export default withRouter(Index)
