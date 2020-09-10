import React from 'react';
import LqInput from './LqInput'
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
const Index = (props) => {
  let item = props.item;
  let config = item.config;
  let data = item.data;
  return (
    <div key={item.id} className={`widget-view ${item.select ? 'widget-select':''}`}>
      <div className="lq-label">
        <span className='label-title'>{data.label}</span>
        {config.request?<span className='label-request'></span>:''}
      </div>
      <div className="lq-desc">{data.desc}</div>
      <div className="lq-widget">
        <LqInput></LqInput>
      </div>
      <div className="lq-widget-cover" onClick={()=>{props.actionSelectWidget(item)}}>
        <i className='btn-delete'><DeleteOutlined /></i>
        <i className='btn-copy'><CopyOutlined/></i>
      </div>
    </div>
  )
}
export default Index;