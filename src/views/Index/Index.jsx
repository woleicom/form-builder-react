import React, {useReducer} from 'react'
import {withRouter} from 'react-router-dom';
import './index.less';
import LqHeader from './Component/LqHeader';
import LqDesignCtx from './Component/LqDesignCtx';
import {IndexContext} from './store'
const initState = {
  formList : [{
    id: 1600224391711,
    type: 'baseWidget',
    select: true,
    config: {
      tag: 'inputText',
    },
    data: {
      request: false,
      label: '单行文本',
      desc: ''
    }
  }]
}
const IndexReducer = (state, action)=>{
  switch(action.type) {
    case 'FORM_LIST':
      return {
          ...state,
          formList: action.payload.formList,
      }
    default: 
        return state;
  }
}
const Index = (props) => {
  const [state, dispath] = useReducer(IndexReducer,initState)
  return (
    <IndexContext.Provider value={{dispath}}>
      <div className='form-design'>
        <LqHeader formList={state.formList}></LqHeader>
        <LqDesignCtx formList={state.formList}></LqDesignCtx>
      </div>
    </IndexContext.Provider>
  )
};
export default withRouter(Index)
