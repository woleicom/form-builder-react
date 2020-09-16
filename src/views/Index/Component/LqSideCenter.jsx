import React, { useState, useContext} from 'react';
import { ReactSortable } from "react-sortablejs";
import LqWidget from './Widget/LqWidget'
import {IndexContext} from '../store';
const LqSideCenter = (props) => {
  const store = useContext(IndexContext);
  const [newWidgetIndex, setNewWidgetIndex] = useState(-1);
  const actionSetFormList = (a, b, c) => {
    if (newWidgetIndex> -1) {
      a.forEach(v=>v.select = false);
      a[newWidgetIndex].id = new Date().getTime();
      a[newWidgetIndex].select = true;
      store.dispath({
        type: 'FORM_LIST',
        payload: {
          formList: a
        }
      });
    }
  }
  const actionSelectWidget = (item) => {
    let a = [...props.formList];
    let selectItemIndex = a.findIndex(v => v.id === item.id);
    if (selectItemIndex>-1) {
      a.forEach(v=>v.select = false);
      a[selectItemIndex].select = true;
      store.dispath({
        type: 'FORM_LIST',
        payload: {
          formList: a
        }
      });
    }
  }
  const actionCopyWidget = (item) => {
    let a = [...props.formList];
    let copyItemIndex = a.findIndex(v => v.id === item.id);
    if (copyItemIndex>-1) {
      a.forEach(v=>v.select = false);
      a.splice(copyItemIndex, 0, {...a[copyItemIndex], select: true});
      store.dispath({
        type: 'FORM_LIST',
        payload: {
          formList: a
        }
      });
    }
  }
  const actionDeleteWidget = (item) => {
    let a = [...props.formList];
    let delItemIndex = a.findIndex(v => v.id === item.id);
    if (delItemIndex>-1) {
      a.forEach(v=>v.select = false);
      a.splice(delItemIndex, 1);
      let selItemIndex = (delItemIndex - 1) < 0 ? 0 : (delItemIndex - 1);
      if (a.length > 0) {
        a[selItemIndex].select = true;
      }
      store.dispath({
        type: 'FORM_LIST',
        payload: {
          formList: a
        }
      });
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
                key={v.id}
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