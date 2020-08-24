<template>
    <div id="layout-container">
        <header :style="{padding: 0}"
                class="layout-header-bar">
            <div class="header-logo"
                 id="header-logo">
                <h1>LOGO</h1>
            </div>
            <div class="flex-row space-between middle"
                 style="flex: 1">
                <div class="flex-row-middle breadcrumb-header">
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
                <Dropdown trigger="click"
                          class="mr-sm-4"
                          @on-click="handleClickDropdown">
                    <div class="flex-row-middle profile">
                        <span>Phạm Đức Chính</span>
                        <div class="avatar-user"></div>
                    </div>
                    <DropdownMenu slot="list">
                        <DropdownItem name="profile">
                            <div class="flex-row-middle">
                                <Icon type="md-person" size="20"/>
                                <span class="pl-sm-2">Thông tin tài khoản</span>
                            </div>
                        </DropdownItem>
                        <DropdownItem name="logout">
                            <div class="flex-row-middle">
                                <Icon type="md-log-out" size="20"/>
                                <span class="pl-sm-2">Đăng xuất</span>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Icon class="icon-toggle-mobile"
                      :style="{margin: '0 20px'}"
                      type="md-menu"
                      size="24"
                      @click="openMenuMobile"></Icon>
            </div>
        </header>
        <main id="layout-content">
            <Sidebar/>
            <Content id="section-content"
                     class="border-t">
                <MenuMobile/>
                <router-view> </router-view>
            </Content>
        </main>
    </div>
</template>

<style scoped lang="less">
    .rotate-icon{
        transform: rotate(-90deg);
    }
</style>

<script>
    import Sidebar from '@/components/partials/Sidebar.vue';
    import MenuMobile from '@/components/partials/MenuMobile.vue';
    export default {
        name: 'Home',

        components: {
            Sidebar,
            MenuMobile,
        },

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
            handleClickDropdown(name) {
                if (name === 'logout') {
                    localStorage.clear();
                    this.$router.push('/login');
                } else if (name === 'profile') {
                    this.$Message.success('Open profile modal');
                }
            },

            openMenuMobile() {
                const navMobile = document.getElementById('menu-mobile');
                navMobile.classList.toggle('show-menu');
            },
            collapsedSider () {
                this.isCollapsed = !this.isCollapsed;
                const logo = document.getElementById('header-logo');
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('hide-sidebar');
                logo.classList.toggle('hide-logo');
            },
        }
    }
</script>
