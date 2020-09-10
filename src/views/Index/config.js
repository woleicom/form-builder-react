import React, { useContext, useState } from "react";
export const widgets = [
  {
    type: 'baseWidget',
    config: {
      tag: 'input',
      type: 'text',
      request: false,
    },
    data: {
      label: '单行文本',
      desc: ''
    }
  },
  {
    type: 'baseWidget',
    config: {
      tag: 'input',
      type: 'textarea',
      request: false,
    },
    data: {
      label: '多行文本',
      desc: ''
    }
  }
]