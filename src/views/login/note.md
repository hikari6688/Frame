### 统一封装 table 组件

> 需求

    通常后台页面都是需要一个搜索条件、表格、分页栏，需要传入一个参数，让table组件自动生成头部，并且按照字段显示每行的数据，表格涉及到用户操作的需要留插槽

> 参数设定

```javascript

    const parameter<Object>={
      render:{
        stripe:false,
        border:false,
        max-height:'500px',
        loading:false,
        currentPage:0,
        total:0
      },
      data:[
      {
        name:'thead的名字',
        scope:'要显示的字段名字',
        width:'当前列宽度(给定默认值)',
        center:'bool值，默认true剧中',
        tip:false
      },
    }
    ]

```
