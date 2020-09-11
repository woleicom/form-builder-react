import React from "react";
import {Tabs} from 'antd';
import LqWidgetSetting from './Plane/LqWidgetSetting';
const LqSideRight = (props) => {
  return (
    <div className='lq-side-right'>
      <Tabs defaultActiveKey="1" centered={true} tabBarGutter={0} size='small'>
        <Tabs.TabPane tab={<div style={{width:'148px',textAlign:'center'}}>字段属性</div>} key="widgetSetting" >
          {props.item ? <LqWidgetSetting {...props}></LqWidgetSetting> : 
            <div style={{textAlign:'center',margin: '20px 0'}}>请选择一个字段来设置属性</div>
          }
        </Tabs.TabPane>
        <Tabs.TabPane tab={<div style={{width:'148px',textAlign:'center'}}>表单属性</div>} key="formSetting" >
          
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default LqSideRight;