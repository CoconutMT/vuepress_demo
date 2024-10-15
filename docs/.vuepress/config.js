module.exports = {
  // 添加标题和描述
  title: "大梦的博客",
  description: "是大梦的博客啊！！！",
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "CSDN", link: "" },
      { text: "Github", link: "" },
    ],
    // 侧边栏
    sidebar: [
      {
        title: '分类1',   // 必要的
        path: '/a/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,// 是否可折叠，默认为true
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
         {
          title: '分类1-1',   // 必要的
          collapsable: false,
          path: '/a/one',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
         },
         {
          title: '分类1-2',   // 必要的
          collapsable: false,
          path: '/a/two',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        
         }
        ]
      },
      {
        title: '分类2',  
        path: '/b/',    
        collapsable: false, 
        children: [
         {
          title: '分类2-1',  
          collapsable: false,
          path: '/b/one',     
        
         },
         {
          title: '分类2-2',  
          collapsable: false,
          path: '/b/two',   
         }
        ]
      }
    ],
    head: [
      ['link', {rel:'icon',href:'/favicon.ico'}]
    ]
  },
}; 
