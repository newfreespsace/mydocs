// src/components/GiscusComponent/index.js

import React from 'react';



export default function GiscusComponent() {
  return (
    <div className="margin-top--lg">
      <div className="giscus" />
      {/* ⚠️ 注意: 请将下面 script 标签内的内容替换为你从 Giscus 网站上复制的完整代码 */}
      <script src="https://giscus.app/client.js"
        data-repo="newfreespsace/mydocs"
        data-repo-id="R_kgDOQZP4HQ"
        data-category="Announcements"
        data-category-id="DIC_kwDOQZP4Hc4CyEVF"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
      </script>
    </div>
  );
}