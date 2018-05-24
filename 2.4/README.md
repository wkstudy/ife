## 知识点
	*子组件传递信息给父组件用dispatch，（看别人笔记son 到parent还可以用自定义事件，到grandparent就不行了）
	*父组件传递到子组件用的是 属性传递，此时为了达到目标，属性名要和子组件的值相同，如我用到的info 和parentInfo(对于这种传递方式我没有在文档中找到，所以还有些不理解)
	*父组件传递子组件可以参考这位大神的：http://ife.baidu.com/note/detail/id/759
## 犯过的错
	* parent.san 引用son.san的时候用的是:(结果找不到son.san)

```
components: {
	        'ui-son': require('./son')
	    }
```
然后改为:(成功)
```
import son from './son.san'
	export default{
		components: {
	        'ui-son': son
	    }

```

	* 往第三层传递信息时，由于parent.san中的input的值不是人为改变，而是由son.san中的input改变的，即使设置了onchange事件，grands.san中的input也不能及时改变，解决方法为son.san 中同时dispatch两次，以不同的key值如自己用的（son-i  ，son-i-another）,一个在parent.san中的messages中处理，另一个在grands.san的messages里面处理
```
this.dispatch('son-i',value);
this.dispatch('son-i-another',value);
```
	*属性名中不能有下划线 将grands中的信息传递到parent中时，由于第一次的命名为parent_info，结果一直不对，然后改为parentInfo后就对了