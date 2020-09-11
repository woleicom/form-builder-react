import React, {useState} from 'react';
import {Drawer,Radio} from 'antd';
const LqPreview = ({visible,onClose}) => {
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
      </div>}
    >
      <div className='lq-preview-cor'></div>
    </Drawer>
  )
}
export default LqPreview;