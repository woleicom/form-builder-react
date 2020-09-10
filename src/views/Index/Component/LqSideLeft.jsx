import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import {widgets} from '../config.js'
const LqSideLeft = (props) => {
  const [widgetList, setWidgetList] = useState(widgets);
  return (
    <div className="lq-side-left">
      <div className="cpt-group">
        <p className="group-title">字段</p>
        <ul className='cpt-list'>
          <ReactSortable 
            list={widgetList}
            setList = {setWidgetList}
            sort={false}
            group={{name: 'sortable-group', pull: 'clone', put: false}}
            draggable={'.widget-label'}
          >
            {widgetList.map((v, i)=>(<li className='widget-label' key={i}><a><span>{v.data.label}</span></a></li>))}
          </ReactSortable>
        </ul>
      </div>
    </div>
  )
}
export default LqSideLeft;