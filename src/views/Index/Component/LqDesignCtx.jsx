import React from 'react';
import LqSideLeft from './LqSideLeft';
import LqSideCenter from './LqSideCenter';
import LqSideRight from './LqSideRight';
const Index = (props) => {
  return (
    <div className='lq-design-ctx'>
      <LqSideLeft></LqSideLeft>
      <LqSideCenter></LqSideCenter>
      <LqSideRight></LqSideRight>
    </div>
  )
}
export default Index;