<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
            <Input v-model="formItem.input2" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 8,maxRows: 30}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button type="primary" @click="format">格式化</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
        <div v-html="formItem.textarea"></div>
    </Form>
</template>

<script>
export default {
    data: function() {
        return {
            formItem: {
                input: '',
                input2: '',
                textarea: ''
            }
        };
    },
    methods: {
        format() {
            this.formItem.textarea = JSON.stringify(JSON.parse(this.formItem.textarea), null, 4);
        }
    }
};
</script>

<style lang="scss" scoped="scoped">
    
</style>