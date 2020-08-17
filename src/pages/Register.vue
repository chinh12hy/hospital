<template>
    <div class="login-wrap flex-row-middle">
        <div class="register-form">
            <form>
                <div class="mb-lg">
                    <div class="form-icon ">
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
                    <Input type="text"
                           size="large"
                           id="email"
                           placeholder="Email"/>
                </div>
                <div class="form-group">
                    <Input type="text"
                           size="large"
                           id="phone"
                           placeholder="Số điện thoại"/>
                </div>
                <div class="form-group">
                    <Button type="info"
                            long
                            size="large">
                        Đăng ký
                    </Button>
                    <div class="mt-lg">
                        <router-link to="/login"
                                     class="hover-underline text-normal">Đăng nhập</router-link>
                    </div>
                    <div class="mt-md">
                        <router-link to="/"
                                     class="hover-underline text-normal"> Quay lại trang chủ </router-link>
                    </div>

                </div>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',

        data() {
            return {
                error: '123'
            }
        }
    }
</script>