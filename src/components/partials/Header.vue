<template>
    <div class="header">
        <Menu/>
<!--        <div class="banner-header"-->
<!--             style="background: url(https://hachium.com/assets/images/header-background.jpg);background-position-x: 50%;">-->
<!--            <div class="wrap-header">-->
<!--                <div class="container">-->
<!--                    <div class="row">-->
<!--                        <div class="email-header fs-lg text-white">-->
<!--                            <h1>Giúp bạn tạo website dạy học bảo mật bài giảng nhất</h1>-->
<!--                            <p>Chỉ trong 10 phút</p>-->
<!--                            <p>Tích hợp sẵn các phương thức thanh toán</p>-->
<!--                            <p>Đầy đủ hệ thống quản lý học viên, khóa học và doanh thu</p>-->

<!--                            <div class="mt-md">-->
<!--                                <Button to="/"-->
<!--                                        type="primary"-->
<!--                                        size="large"> Dùng thử miễn phí </Button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<style scoped lang="less">
    .banner-header {
        position: relative;
        margin-top: 4px;
        max-height: 820px;
        height: 820px;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        z-index: 201;

    }
    @media (min-width: 768px) {
        .email-header {
            margin-top: 300px;
            p {
                line-height: 1.2;
                margin-top: 10px;
            }
        }
    }
    @media (max-width: 767px) {
        .email-header {
            margin-top: 150px;
            text-align: center;
        }
    }
</style>

<script>
    import Menu from '@/components/partials/Menu.vue';
    export default {
        name: 'Header',

        components: {
            Menu,
        },

        created() {
            this.test();
        },

        methods: {
            test() {
                console.log('process', process.env)
            }
        }
    }
</script>