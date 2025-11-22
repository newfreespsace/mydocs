import React from 'react';
import Content from '@theme-original/DocItem/Content';
import GiscusComponent from '@site/src/components/GiscusComponent'; // 导入你的组件

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <GiscusComponent />
    </>
  );
}
