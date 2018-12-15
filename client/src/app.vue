
<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            data: 1
        };
    },
    methods: {},
    watch: {
        '$route': {
            handler(newData) {
                this.data = newData;
            }
        }
    },
    mounted() {}
};
</script>

<style lang="scss">
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    font-size: 16px;

    -webkit-text-size-adjust: 100%;
}

body, html, section, article, div, ul, li, h3, h4, h5, p {
    margin: 0;
    padding: 0;

    font-weight: normal;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;

    color: #409EFF;
}

html, body, .app {
    height: 100%;
}

.clear {
    clear: both;
}

</style>

