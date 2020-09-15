import React,{useState,useContext} from 'react';
import LqSideLeft from './LqSideLeft';
import LqSideCenter from './LqSideCenter';
import LqSideRight from './LqSideRight';
import {IndexContext} from '../store';
const Index = (props) => {
  const indexCtx = useContext(IndexContext);
  const formList = indexCtx.indexState.formList;
  const setFormList = (data)=>{
    indexCtx.indexDispath({
      type: 'FORM_LIST',
      payload: {
        formList: data
      }
    })
  };
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  /**
   * 清除列表选择状态Item
   * @param {*} data array 传则改变data中选中项，不传则改变formList
   */
  const clearWidgetSelect = (data) => {
    if (data) {
      let selItemIndex = data.findIndex(v => v.select);
      if (selItemIndex > -1) {
        data[selItemIndex].select = false;
      }
    } else {
      let selItemIndex = formList.findIndex(v => v.select);
      if (selItemIndex>-1) {
        setFormList(formList.splice(selItemIndex, 1, {...formList[selItemIndex], select: false}));
      }
    }
  }
  // 选中formlist 小部件
  const activeWidgetSelect = (index) => {
    setActiveItemIndex(index);
  }
  // 更改formlist 数据
  const actionWidgetUpdateData = (item) => {
    let a = [...formList];
    let updateItemIndex = a.findIndex(v => v.id === item.id);
    if (updateItemIndex>-1) {
      a.splice(updateItemIndex, 1, item)
      setFormList(a);
    }
  }
  return (
    <div className='lq-design-ctx'>
      <LqSideLeft 
        clearWidgetSelect={clearWidgetSelect}
      ></LqSideLeft>
      <LqSideCenter 
        formList={formList}
        setFormList={setFormList}
        clearWidgetSelect={clearWidgetSelect}
        activeWidgetSelect={activeWidgetSelect}
      >
      </LqSideCenter>
      <LqSideRight 
        item={activeItemIndex > -1 ? formList[activeItemIndex] : false}
        actionWidgetUpdateData={actionWidgetUpdateData}
      ></LqSideRight>
    </div>
  )
}
export default Index;