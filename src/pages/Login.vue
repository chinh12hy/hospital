<template>
    <div class="login-wrap flex-row-middle">
        <div class="login-form">
            <form>
                <div class="mb-lg">
                    <div class="form-icon">
                        <span>
                            <Icon type="md-person"></Icon>
                        </span>
                    </div>
                </div>
                <div style="height: 63px">
                    <div v-if="error !== ''"
                         class="alert error-msg">
                        Email hoặc mật khẩu không chính xác
                    </div>
                </div>
                <div class="form-group">
                    <Input type="text"
                           size="large"
                           id="username"
                           placeholder="Username"/>
                </div>
                <div class="form-group">
                    <Input type="password"
                           size="large"
                           id="password"
                           placeholder="Password"/>
                </div>
                <div class="form-group">
                    <Button type="info"
                            long
                            size="large" @click="login">
                        Đăng nhập
                    </Button>
                    <div class="mt-lg">
                        <span>
                            Bạn không có tài khoản?
                            <router-link to="/register"
                                         class="hover-underline"> Đăng ký</router-link>
                        </span>
                    </div>
                    <div class="mt-md">
                        <router-link to="/"
                                     class="hover-underline"> Quay lại trang chủ </router-link>
                    </div>

                </div>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        data() {
            return {
                error: '',
            }
        },

        methods: {
            login() {
                this.error = '123';
              // this.$router.push('/');
            },
        },
    }
</script>