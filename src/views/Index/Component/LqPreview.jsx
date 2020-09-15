import React, {useState,useContext} from 'react';
import {Drawer,Radio, Button} from 'antd';
import {IndexContext} from '../store';
import LqRenderWidget from './RenderWidget/LqRenderWidget';
import { useEffect } from 'react';
const LqPreview = ({visible,onClose}) => {
  const indexCtx = useContext(IndexContext);
  const formList = indexCtx.indexState.formList;
  const [form, setForm] = useState([]);
  useEffect(()=>{
    setForm(formList.map((v)=>{
      let d = JSON.parse(JSON.stringify(v));
      d.data.value = '';
      return d;
    }))
  },[formList]);
  
  const [tab,setTab] = useState('pc');
  const actionTabToggle = (e) => {
    setTab(e.target.value);
  }
  return (
    <Drawer
      zIndex={100}
      visible={visible}
      onClose={onClose}
      width='90%'
      title={<div style={{textAlign: "center"}}>
        <Radio.Group value={tab} onChange={actionTabToggle}>
          <Radio.Button value="pc">电脑端</Radio.Button>
          <Radio.Button value="wap" disabled={false}>移动端</Radio.Button>
        </Radio.Group>
        <div style={{textAlign:'center',fontSize:'12px',color:'#ccc'}}>只是展示逻辑，至于如何渲染可以自己思考</div>
      </div>}
    >
      {tab === 'pc'?
        <div className='lq-preview-cor'>
          <div className='render-widget-list'>
            {form.map((v, i)=> {
              return (
                <LqRenderWidget
                  key={i}
                  item={v}
                ></LqRenderWidget>
              )
            })}
           <div className="render-form-submit">
            {form.length ? <Button type='primary'>提交</Button>:'请设置一个字段来展示预览'}
            </div>
          </div>
        </div>:<div style={{textAlign:'center'}}>敬请期待</div>
      }
    </Drawer>
  )
}
export default LqPreview;