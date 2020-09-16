import React from 'react';
import LqInput from './LqInput'
import LqTextarea from './LqTextarea'
const Index = (props) => {
  let item = props.item;
  let config = item.config;
  let data = item.data;
  let chooseWidget = () => {
    switch (config.tag) {
      case 'inputText': return <LqInput></LqInput>;
      case 'inputTextarea': return <LqTextarea></LqTextarea>;
      default : return '';
    }
  }
  return (
    <div key={item.id} className={`widget-view`}>
      <div className="lq-label">
        <span className='label-title'>{data.label}</span>
        {data.request?<span className='label-request'></span>:''}
      </div>
      <div className="lq-desc">{data.desc}</div>
      <div className="lq-widget">
        {chooseWidget()}
      </div>
    </div>
  )
}
export default Index;