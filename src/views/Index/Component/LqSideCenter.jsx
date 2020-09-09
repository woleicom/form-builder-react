import React, {useContext,useState} from 'react';
import {Input} from 'antd';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { ReactSortable } from "react-sortablejs";
const Index = () => {
  const [formList, setFormList] = useState([]);
  return (
    <div className="lq-side-center">
      <div className='widget-content-cor'>
        <ReactSortable
          className='widget-list'
          list={formList}
          setList={setFormList}
          animation="150"
          ghost-class="form-item-ghost"
          group="cpt-group"
        >
          {formList.map((v, i)=> {
            let props = v.props;
            return (
              <div className='widget-view' key={i}>
                <div className="lq-label">
                  <span className='label-title'>{props.label}</span>
                  <span className='label-request'></span>
                </div>
                <div className="lq-desc">{props.desc}</div>
                <div className="lq-widget">
                  <Input type="text"/>
                </div>
                <div className="lq-widget-cover">
                  <i className='btn-delete'><DeleteOutlined /></i>
                  <i className='btn-copy'><CopyOutlined/></i>
                </div>
              </div>
            )
          })}
        </ReactSortable>
        {/* <li className='widget-view'>
          <div className="lq-label">
            <span className='label-title'>单行文本</span>
            <span className='label-request'></span>
          </div>
          <div className="lq-desc">测试</div>
          <div className="lq-widget">
            <Input type="text"/>
          </div>
          <div className="lq-widget-cover">
            <i className='btn-delete'><DeleteOutlined /></i>
            <i className='btn-copy'><CopyOutlined/></i>
          </div>
        </li>
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
            <i className='btn-delete'><DeleteOutlined /></i>
            <i className='btn-copy'><CopyOutlined/></i>
          </div>
        </li> */}
      </div>
    </div>
  )
}
export default Index;