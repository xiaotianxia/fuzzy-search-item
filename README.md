
## 说明：
一个长列表的自定义列工具。适用于vue和element-ui搭建的系统。

### th、td属性：
- **alwaysShow** 列一直显示，自定义列弹窗里不会出现

### props: 
- **related-table-class** 要绑定的table的className
- **cache-name** 用于存储已选列的索引值的localStorage名
- **render-by-class** 通过数据列class名渲染，主要针对存在合并单元格的情况，这时default-checked传class名组成的数组
- **default-checked** 数组，默认展示数据列的索引号或class名


## 使用

```bash
npm i table-columns-custom-tool
```


```html
<el-button type="primary" size="small" @click="onCustomTable"><i class="el-icon-setting"></i></el-button>

...
<table>
...
</table>

...

<table-columns-custom 
    ref="tableCustomModal"
    related-table-class="js-list"
    :default-checked="[0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]"
    cache-name="XX_XX_LIST_FIELDS">
</table-columns-custom>
```

```vue
import TableColumnsCustom from 'table-columns-custom-tool';

...

components: {
    TableColumnsCustom
},

methods: {
	getData () {
		getRemoteData.then(res => {
			this.list = res.list;
			//获取数据后，触发重新渲染表格
			this.$nextTick(() => {
		        this.$refs.tableCustomModal.init();
		    });
		});		
	},

	onCustomTable () {
		this.$refs.tableCustomModal.showModal();
	}
}
```

## 图示
![](https://user-gold-cdn.xitu.io/2018/11/17/167209207001c70b?w=1209&h=638&f=gif&s=1623360)