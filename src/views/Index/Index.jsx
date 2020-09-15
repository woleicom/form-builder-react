import React, {useReducer} from 'react'
import {withRouter} from 'react-router-dom';
import './index.less';
import LqHeader from './Component/LqHeader';
import LqDesignCtx from './Component/LqDesignCtx';
import {IndexContext} from './store'
const initState = {
  formList : []
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
  const [indexState, indexDispath] = useReducer(IndexReducer,initState)
  return (
    <IndexContext.Provider value={{ indexState, indexDispath}}>
      <div className='form-design'>
        <LqHeader></LqHeader>
        <LqDesignCtx ></LqDesignCtx>
      </div>
    </IndexContext.Provider>
  )
};
export default withRouter(Index)
