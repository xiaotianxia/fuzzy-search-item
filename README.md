## 说明
一个简单的模糊搜索表单项，基于Vue和element-ui

## 图示
![](https://user-gold-cdn.xitu.io/2018/11/18/16726e6bf1dc99e2?w=579&h=736&f=gif&s=250657)

## 使用

```html
<el-form ref="form" inline :model="formData" :rules="rules">
    <el-form-item label="姓名:" prop="name">
        <fuzzy-search-item
            v-model="formData.name"
            clearable
            api-path="api.user.searchUsers"
            success-condition="status==0"
            response-path="data.list"
            query-param="userName"
            :extra-params="{id: 123, n: 234}"
            unique-key="userId"
            label="userName"
            placeholder="输入姓名模糊搜索..."
            @focus="onFocus"
            @change="onChange">
        </fuzzy-search-item>
    </el-form-item>

    <el-form-item label="地址:">
        <span>{{formData.address}}</span>
    </el-form-item>
</el-form>
```

```js
data () {
    return {
        formData: {
            id: '',
            name: '',
            address: ''
        },

        rules: {
            name: [
                { required: true, message: '请选择姓名', trigger: 'change' }
            ]
        }
    }
},

methods: {
    onChange (e) {
        console.log('所选数据', e);
        if(e.data.userId) {
            this.formData.name = e.data.userName;
            this.formData.id = e.data.userId;
            this.formData.address = e.data.address;
        } else {
            this.formData.name = '';
            this.formData.id = '';
            this.formData.address = '';
        }
    },

    onFocus (e) {
        console.log(e.event.type)
    }
}
```

### props

#### apiPath 
远程方法的路径

类似这样的请求方法：
```js
const api = {
    user: {
        searchUsers (params) {
            return fetch(params)..
        }
    }
}
```
则 apiPath="api.user.searchUsers"

#### successCondition 
服务端返回成功的标识，如 data.status=0

#### responsePath 
所取用数据的路径，如 data.list

#### queryParam 
所选的字符串值传入后端的key名，如上例中取到的name值传入后端为{userName: ${name}}

#### extraParams 
额外的参数再在这里传

#### uniqueKey 
后端返回数据的唯一id

#### label 
id对应的名称

#### disabled 
禁用

#### placeholder 
placeholder

