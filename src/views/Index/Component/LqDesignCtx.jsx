import React from 'react';
import LqSideLeft from './LqSideLeft';
import LqSideCenter from './LqSideCenter';
import LqSideRight from './LqSideRight';
const Index = (props) => {
  return (
    <div className='lq-design-ctx'>
      <LqSideLeft 
        {...props}
      ></LqSideLeft>
      <LqSideCenter 
        {...props}
      >
      </LqSideCenter>
      <LqSideRight 
        {...props}
      ></LqSideRight>
    </div>
  )
}
export default Index;