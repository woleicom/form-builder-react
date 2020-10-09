import React,{ useState } from 'react';
import {Button} from 'antd';
import LqPreview from './LqPreview';
const LqHeader = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const actionOpenPreview = () => {
    setPreviewVisible(true);
  }
  const actionClosePreview = () => {
    setPreviewVisible(false);
  }
  return (
    <div className='lq-header'>
      <p>
        交互仿写“简道云”，开源只提供思路，请勿用到生产环境 <span>碰到好的工作产品会仿写提供简单思路，如果喜欢欢迎star</span>
        <Button onClick={actionOpenPreview} style={{float: 'right',marginTop:'10px'}}>预览</Button>
      </p>
      <LqPreview visible={previewVisible} onClose={actionClosePreview}></LqPreview>
    </div>
  )
}
export default LqHeader;