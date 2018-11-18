<template>
    <el-select
        v-model="searchValue"
        filterable
        remote
        clearable
        size="small"
        :disabled="disabled"
        :placeholder="placeholder || '输入搜索内容...'"
        :remote-method="onSearch"
        @focus="onFocus"
        @change="onSelect"
        :loading="loading">
        <el-option
            v-for="item in list"
            :key="item[uniqueKey]"
            :label="item[label]"
            :value="item[uniqueKey]">
        </el-option>
    </el-select>
</template>

<script>
export default {
    data () {
        return {
            loading: false,
            list: [],
            searchValue: this.value
        }
    },

    props: [
        'apiPath',
        'successCondition',
        'responsePath',
        'queryParam',
        'extraParams',
        'uniqueKey',
        'label',
        'disabled',
        'placeholder',
        'value'
    ],

    watch: {
        value (e) {
            //用于回写
            this.searchValue = e;
        }
    },

    methods: {
        onSearch (e) {
            e = this.trim(e);
            if(e == '') { return; }
            let param = {};

            if(this.extraParams && this.extraParams != '') {
                param = {
                    ...this.extraParams
                };
            }

            param[this.queryParam] = e;

            let success = this.successCondition.split('==');

            this.loading = true;
            eval(this.apiPath)(param).then(res => {
                this.loading = false;
                //eg: res.satus == 0
                if(res[success[0]] == success[1]) {
                    //eg: res.data.list
                    this.list = eval('res.' + this.responsePath);
                }
            });
        },

        trim (str) {
            return str;
        },

        onSelect (e) {
            let item = {};
            if(e != '') {
                item = _.find(this.list, item => {
                    return e == item[this.uniqueKey]
                });
            }
            this.$emit('change', {
                data: item
            });
        },

        onFocus (e) {
            this.$emit('focus', {
                event: e
            });
        }
    }
}
</script>