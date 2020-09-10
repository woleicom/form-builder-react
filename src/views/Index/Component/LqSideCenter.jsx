import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import LqWidget from './Widget/LqWidget'
const LqSideCenter = (props) => {
  const [newWidgetIndex, setNewWidgetIndex] = useState(-1);
  const actionSetFormList = (a, b, c) => {
    if (newWidgetIndex> -1) {
      a.splice(newWidgetIndex, 1, {...a[newWidgetIndex], id: new Date().getTime()});
      props.setFormList(a,b,c);
      setNewWidgetIndex(-1);
    }
  }
  const actionSelectWidget = () => {}
  return (
    <div className="lq-side-center">
      <div className='widget-content-cor'>
        <ReactSortable
          className='widget-list'
          list={props.formList}
          setList={actionSetFormList}
          animation="150"
          ghostClass="widget-view-ghost"
          group={{name: 'sortable-group', pull: "clone", put: true}}
          onAdd={evt => setNewWidgetIndex(evt.newIndex)}
        >
          {props.formList.map((v, i)=> {
            return (
              <LqWidget 
                key={i}
                item={v}
                actionSelectWidget={actionSelectWidget}
              ></LqWidget>
            )
          })}
        </ReactSortable>
      </div>
    </div>
  )
}
export default LqSideCenter;