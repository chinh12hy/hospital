<template>
    <div class="layout-admin">
        <Layout>
            <Sider ref="sidebar"
                   hide-trigger
                   :width="250"
                   collapsible
                   :collapsed-width="78"
                   v-model="isCollapsed">
                <div class="avatar-admin">
                    <div class="flex-row-middle space-between">
                        <div class="logo-sidebar text-white">
                            <span style="font-size: 24px"
                                  class="semi-bold">
                                LOGO
                            </span>
                        </div>
                    </div>
                    <!--                    <div class="flex-row">-->
                    <!--                        <div class="avatar-wrap">-->
                    <!--                            <img src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80"-->
                    <!--                                 alt="">-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </div>
                <Menu :active-name="activeMenuName"
                      theme="dark"
                      class="mt-lg-5"
                      width="auto"
                      :class="menuitemClasses">
                    <MenuItem name="CourseManagement" :to="{ name: 'HomeAdmin'}">
                        <Icon type="md-home"></Icon>
                        <span>Trang chủ</span>
                    </MenuItem>
                    <MenuItem name="course" :to="{ name: 'CourseManagement'}">
                        <Icon type="ios-navigate"></Icon>
                        <span>Báo cáo</span>
                    </MenuItem>
                    <MenuItem name="department"
                              :to="{ name: 'department' }">
                        <Icon type="ios-folder-open"></Icon>
                        <span>Phòng ban</span>
                    </MenuItem>
                    <MenuItem name="Posts"
                              :to="{ name: 'Posts'}">
                        <Icon type="ios-person"></Icon>
                        <span>Bài viết</span>
                    </MenuItem>
                    <MenuItem name="UsersManagement"
                              :to="{ name: 'UsersManagement'}">
                        <Icon type="ios-person"></Icon>
                        <span>Tài khoản</span>
                    </MenuItem>
                    <MenuItem name="waitingUser"
                              :to="{ name: 'UsersManagement'}">
                        <Icon type="ios-person"></Icon>
                        <span>Tài khoản chờ phê duyệt</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}"
                        class="layout-header-bar">
                    <div class="flex-row-middle">
                        <Icon @click.native="collapsedSider"
                              :class="rotateIcon"
                              :style="{margin: '0 20px'}"
                              type="md-menu"
                              size="24"></Icon>
                        <Breadcrumb>
                            <BreadcrumbItem to="/">Home</BreadcrumbItem>
                            <BreadcrumbItem to="/department">
                                Phòng ban
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                Sub phòng ban
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Header>
                <Content class="border-t"
                         :style="{background: '#fff', minHeight: '260px', height: '100%', overflow: 'auto'}">
                    <router-view> </router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<style scoped lang="less">
    .avatar-admin {
        background: #070617;
        padding: 14px 24px;
        position: relative;
    }
    .avatar-wrap {
        position: absolute;
        z-index: 999;
        left: 50%;
        transform: translateX(-50%);
        width: 75px;
        height: 75px;
        border: 7px solid #515a6e;
        border-radius: 50%;
        img {
            border-radius: 50%;
            height: 100%;
        }
    }
    .layout-admin{
        background: #f5f7f9;
        position: relative;
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
        name: 'Home',

        data () {
            return {
                isCollapsed: false,
                clientID: '244376640722-ugp7doftu62fb13v9mv6ddbul8s1sju8.apps.googleusercontent.com',
                secretID: 's4c6fEPT_yb3nTaVptGWrHXM',
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            activeMenuName() {
                console.log(this.$route);
                return this.$route.name
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
                this.isCollapsed = !this.isCollapsed
                this.$refs.sidebar.toggleCollapse();
            },
        }
    }
</script>