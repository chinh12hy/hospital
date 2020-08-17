<template>
    <div class="layout-admin">
        <Layout>
            <Sider ref="sidebar"
                   hide-trigger
                   collapsible
                   :collapsed-width="78"
                   v-model="isCollapsed">
                <Menu active-name="course"
                      theme="dark"
                      width="auto"
                      :class="menuitemClasses">
                    <MenuItem name="home" :to="{ name: 'Home'}">
                        <Icon type="md-home" />
                        <span>Quay lại trang chủ</span>
                    </MenuItem>
                    <MenuItem name="course" :to="{ name: 'CourseManagement'}">
                        <Icon type="ios-navigate"></Icon>
                        <span>Khóa học</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>Bài học</span>
                    </MenuItem>
                    <MenuItem name="users" :to="{ name: 'UsersManagement'}">
                        <Icon type="ios-person"></Icon>
                        <span>Tài khoản</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}"
                        class="layout-header-bar">
                    <Icon @click.native="collapsedSider"
                          :class="rotateIcon"
                          :style="{margin: '0 20px'}"
                          type="md-menu"
                          size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view> </router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<style scoped lang="less">
    .layout-admin{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100vh;
        .ivu-layout {
            height: 100%;
        }
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>

<script>
    export default {
        name: 'HomeAdmin',
        created() {
            console.log('process: ', process.env);
        },

        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.sidebar.toggleCollapse();
            }
        }
    }
</script>