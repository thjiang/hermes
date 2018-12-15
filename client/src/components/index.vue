<template>
    <section class="index">
        <div class="logo">
            <img src="https://usr.ink/const/hermes/logo.png" alt="logo" width="100%">
        </div>
        <div class="desc">一个极简的在线 mock 平台</div>
        <div class="btn-more" @click="go">继续了解</div>
    </section>
</template>

<script>
import util from '../common/util';
import Fetch from "../common/fetch";

export default {
    data: function() {
        return {
            page: 'index'
        };
    },
    methods: {
        go() {
            this.$router.push({
                path: '/mock/'
            });
        }
    },
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,#35aef8,#7681ff 76%,#7681ff 0);
    .logo {
        width: 320px;
        margin: 0 auto;
        padding-top: 30%;
    }
    .desc {
        font-size: 20px;
        font-weight: lighter;
        color: #FFF;
        margin: 24px auto;
        text-align: center;
        width: 300px;
    }
    .btn-more {
        margin: 36px auto;
        width: 120px;
        border: none;
        outline: none;
        color: #fff;
        padding: 8px 26px;
        font-size: 16px;
        background: linear-gradient(-135deg, #935EFF, #625EFF);
        border-radius: 4px;
        cursor: pointer;
    }
}
</style>