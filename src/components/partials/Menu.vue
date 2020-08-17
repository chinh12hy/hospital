<template>
    <div class="navigation-wrap bg-light start-header start-style">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="/"><img
                                src="https://assets.codepen.io/1462889/fcy.png" alt=""></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse"
                             id="navbarSupportedContent">
                            <ul class="navbar-nav py-4 py-md-0">
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                    <router-link to="/"
                                                 class="nav-link dropdown-toggle"
                                                 data-toggle="dropdown"
                                                 role="button"
                                                 aria-haspopup="true"
                                                 aria-expanded="false">
                                        Home
                                    </router-link>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                    </div>
                                </li>
                                <li v-for="(item, index) in menuOptions"
                                    :key="index"
                                    class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <router-link :to="item.url"
                                                 class="nav-link">
                                        {{item.label}}
                                    </router-link>
                                </li>
                            </ul>
                            <div class="ml-auto flex-row middle">
                                <div class="nav-item">
                                    <router-link to="/register"
                                                 class="nav-link"> Đăng kí </router-link>
                                </div>
                                <div class="ml-lg">
                                    <router-link to="/login"
                                                 class="btn btn-primary"> Đăng nhập </router-link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .nav-item {
        &:hover {
            text-decoration: none;
        }
    }
</style>

<script>
    export default {
        name: 'Menu',

        data() {
            return {
                menuOptions: [
                    {
                        label: 'Khóa học',
                        value: '',
                        url: '/course-manager'
                    },
                    {
                        label: 'Bài học',
                        value: '',
                        url: '/course-manager'
                    },
                    {
                        label: 'Contact',
                        value: 'contact',
                        url: '/contact'
                    },
                ]
            }
        }
    }
</script>