import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import LqWidget from './Widget/LqWidget'
const LqSideCenter = (props) => {
  const [newWidgetIndex, setNewWidgetIndex] = useState(-1);
  const actionSetFormList = (a, b, c) => {
    if (newWidgetIndex> -1) {
      props.clearWidgetSelect(a);
      a.splice(newWidgetIndex, 1, {...a[newWidgetIndex], id: new Date().getTime(), select: true});
      props.setFormList(a,b,c);
      props.activeWidgetSelect(newWidgetIndex);
      setNewWidgetIndex(-1);
    } else {
      props.setFormList(a,b,c);
    }
  }
  const actionSelectWidget = (item) => {
    let selectItemIndex = props.formList.findIndex(v => v.id === item.id);
    if (selectItemIndex>-1) {
      let a = [...props.formList];
      props.clearWidgetSelect(a);
      a.splice(selectItemIndex, 1, {...a[selectItemIndex], select: true});
      props.setFormList(a);
    }
  }
  const actionCopyWidget = (item) => {
    let copyItemIndex = props.formList.findIndex(v => v.id === item.id);
    if (copyItemIndex>-1) {
      let a = [...props.formList];
      props.clearWidgetSelect(a);
      a.splice(copyItemIndex, 0, {...a[copyItemIndex], select: true});
      props.setFormList(a);
    }
  }
  const actionDeleteWidget = (item) => {
    let delItemIndex = props.formList.findIndex(v => v.id === item.id);
    if (delItemIndex>-1) {
      let a = [...props.formList];
      props.clearWidgetSelect(a);
      a.splice(delItemIndex, 1);
      let selItemIndex = (delItemIndex - 1) < 0 ? 0 : (delItemIndex - 1);
      if (a.length > 0) {
        a.splice(selItemIndex, 1, {...a[selItemIndex], select: true});
      }
      props.setFormList(a);
    }
  }
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
                actionCopyWidget={actionCopyWidget}
                actionDeleteWidget={actionDeleteWidget}
              ></LqWidget>
            )
          })}
        </ReactSortable>
      </div>
    </div>
  )
}
export default LqSideCenter;