import React,{useState} from 'react';
import LqSideLeft from './LqSideLeft';
import LqSideCenter from './LqSideCenter';
import LqSideRight from './LqSideRight';
const Index = (props) => {
  const [formList, setFormList] = useState([]);
  const clearWidgetSelect = () => {
    let selItemIndex = formList.findIndex(v => v.select);
    if (selItemIndex>-1) {
      setFormList(formList.splice(selItemIndex, 1, {...formList[selItemIndex], select: false}));
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
      >
      </LqSideCenter>
      <LqSideRight ></LqSideRight>
    </div>
  )
}
export default Index;