import React from 'react';
import {Input,Checkbox} from 'antd';
const LqWidgetSetting = (props) => {
  let item = props.item;
  let data = item.data;
  const updateData = (key, value) => {
    props.actionWidgetUpdateData({...item, data: {...item.data, [`${key}`]:value}});
  }
  return (
    <div className='widget-setting'>
      <div className="box-item">
        <div className="item-title">标题</div>
        <div className="item-content">
          <Input 
            value={data.label} 
            onChange={(e)=>{updateData('label',e.target.value)}}
          ></Input>
        </div>
      </div>
      <div className="box-item">
        <div className="item-title">描述</div>
        <div className="item-content">
          <Input.TextArea 
            value={data.desc} 
            onChange={(e)=>{updateData('desc',e.target.value)}}
            autoSize={{minRows:2, maxRows: 2}}
          ></Input.TextArea>
        </div>
      </div>
      <div className="box-item">
        <div className="item-title">校验</div>
        <div className="item-content">
          <Checkbox 
            checked={data.request} 
            onChange={(e)=>{updateData('request',e.target.checked)}}
          >必填</Checkbox>
        </div>
      </div>
    </div>
  )
} 
export default LqWidgetSetting