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
                    <div class="google-btn"
                         @click="loginWithGoogle">
                        <div class="google-icon-wrapper">
                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p class="btn-text"><b>Sign in with google</b></p>
                    </div>
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

<style lang="less">
    .google-btn {
        width: 184px;
        height: 42px;
        background-color: #4285f4;
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
        margin-top: 15px;
        .google-icon-wrapper {
            position: absolute;
            margin-top: 1px;
            margin-left: 1px;
            width: 40px;
            height: 40px;
            border-radius: 2px;
            background-color: #fff;
        }
        .google-icon {
            position: absolute;
            margin-top: 11px;
            margin-left: 11px;
            width: 18px;
            height: 18px;
        }
        .btn-text {
            float: right;
            margin: 11px 11px 0 0;
            color: #ffffff;
            font-size: 14px;
            letter-spacing: 0.2px;
        }
        &:hover {
            box-shadow: 0 0 6px #4285f4;
        }
        &:active {
            background: #1669F2;
        }
    }
</style>

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

            loginWithGoogle() {
                this.$gAuth
                    .signIn()
                    .then(GoogleUser => {
                        // on success do something
                        console.log('GoogleUser', GoogleUser)
                        const userInfo = {
                            loginType: 'google',
                            google: GoogleUser
                        }
                        console.log('userInfo: ', userInfo);
                        // this.$store.commit('setLoginUser', userInfo);
                        this.$router.push('/');
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
            },
        },
    }
</script>