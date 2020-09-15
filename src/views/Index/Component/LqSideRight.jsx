import React, {useContext,useState,useEffect} from "react";
import {Tabs} from 'antd';
import LqWidgetSetting from './Plane/LqWidgetSetting';
import {IndexContext} from '../store';
const LqSideRight = (props) => {
  const indexCtx = useContext(IndexContext);
  const formList = indexCtx.indexState.formList;
  const [item, setItem] = useState({});
  useEffect(()=>{
    const itemIndex = formList.findIndex(v=>v.select);
    if (itemIndex > -1) {
      setItem(formList[itemIndex]);
    }
  },[formList])
  return (
    <div className='lq-side-right'>
      <Tabs defaultActiveKey="1" centered={true} tabBarGutter={0} size='small'>
        <Tabs.TabPane tab={<div style={{width:'148px',textAlign:'center'}}>字段属性</div>} key="widgetSetting" >
          {item.id ? <LqWidgetSetting item={item}></LqWidgetSetting> : 
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