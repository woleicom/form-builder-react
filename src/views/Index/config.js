import React, { useContext, useState } from "react";
export const widgets = [
  {
    type: 'baseWidget',
    label: '单行文本',
    config: {
      tag: 'input',
      type: 'text',
    },
    props: {
      label: '单行文本',
      desc: ''
    }
  },
  {
    type: 'baseWidget',
    label: '多行文本',
    config: {
      tag: 'input',
      type: 'textarea'
    },
    props: {
      label: '多行文本',
      desc: ''
    }
  }
]