<template>
    <section class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Content :style="{padding: '24px 0', marginTop: '36px', height: '80vh', background: '#fff'}">
                    <!-- <interfaceLists /> -->
                    <interfacePage />
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; 浙ICP备18020999号</Footer>
        </Layout>
    </section>
</template>

<script>
import util from '../common/util';
import Fetch from "../common/fetch";
import interfaceLists from "./interfaceLists.vue";
import interfacePage from "./interface.vue";

export default {
    data: function() {
        return {
            page: 'mock'
        };
    },
    methods: {
        go() {}
    },
    mounted() {

    },
    components: {
        interfaceLists,
        interfacePage
    }
};
</script>

<style lang="scss" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>