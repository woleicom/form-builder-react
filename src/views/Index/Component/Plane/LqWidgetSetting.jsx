import React, {useState,useEffect,useContext} from 'react';
import {Input,Checkbox} from 'antd';
import {IndexContext} from '../../store';
const LqWidgetSetting = (props) => {
  const store = useContext(IndexContext);
  const [item, setItem] = useState(null);
  useEffect(()=>{
    const itemIndex = props.formList.findIndex(v=>v.select);
    if (itemIndex > -1) {
      setItem(props.formList[itemIndex]);
    }
  },[props.formList]);
  const updateData = (key, value) => {
    let a = [...props.formList];
    let updateItemIndex = a.findIndex(v => v.id === item.id);
    if (updateItemIndex>-1) {
      a[updateItemIndex].data[key] = value;
      store.dispath({
        type: 'FORM_LIST',
        payload: {
          formList: a
        }
      })
    }
  }
  return (
    item?<div className='widget-setting'>
      <div className="box-item">
        <div className="item-title">标题</div>
        <div className="item-content">
          <Input 
            value={item.data.label} 
            onChange={(e)=>{updateData('label',e.target.value)}}
          ></Input>
        </div>
      </div>
      <div className="box-item">
        <div className="item-title">描述</div>
        <div className="item-content">
          <Input.TextArea 
            value={item.data.desc} 
            onChange={(e)=>{updateData('desc',e.target.value)}}
            autoSize={{minRows:2, maxRows: 2}}
          ></Input.TextArea>
        </div>
      </div>
      <div className="box-item">
        <div className="item-title">校验</div>
        <div className="item-content">
          <Checkbox 
            checked={item.data.request} 
            onChange={(e)=>{updateData('request',e.target.checked)}}
          >必填</Checkbox>
        </div>
      </div>
    </div>
    :<div style={{textAlign:'center',margin: '20px 0'}}>请选择一个字段来设置属性</div>
  )
} 
export default LqWidgetSetting