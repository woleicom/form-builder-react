import React from "react";
import {Tabs} from 'antd';
import LqWidgetSetting from './Plane/LqWidgetSetting';
const LqSideRight = (props) => { 
  return (
    <div className='lq-side-right'>
      <Tabs defaultActiveKey="widgetSetting" centered={true} tabBarGutter={0} size='small'>
        <Tabs.TabPane tab={<div style={{width:'148px',textAlign:'center'}}>字段属性</div>} key="widgetSetting" >
          <LqWidgetSetting></LqWidgetSetting>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<div style={{width:'148px',textAlign:'center'}}>表单属性</div>} key="formSetting" >
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default LqSideRight;